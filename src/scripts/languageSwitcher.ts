import { initNavigation } from "./navigation";

export function initLanguageSwitcher(): void {
  const select = document.getElementById(
    "lang-select"
  ) as HTMLSelectElement | null;

  const fetchAndReplace = async (pathname: string, push = false) => {
    try {
      const res = await fetch(pathname, { credentials: "same-origin" });
      if (!res.ok) throw new Error("Network response was not ok");

      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, "text/html");

      // Replace body content, update title and optionally push history
      document.title = doc.title || document.title;
      // Replace body innerHTML so we preserve the same document context (avoids full reload)
      document.body.innerHTML = doc.body.innerHTML;

      if (push) history.pushState({}, "", pathname);

      // Re-initialize client-side scripts that attach to DOM elements
      initNavigation();
      initLanguageSwitcher();
    } catch (err) {
      // On any failure, fallback to full navigation
      window.location.href = pathname;
    }
  };

  select?.addEventListener("change", async ({ target }) => {
    const selectedLang = (target as HTMLSelectElement).value;
    const currentPath = window.location.pathname;
    // Extract the path after /portfolio or /
    const pathAfterLang = currentPath
      .replace(/^\/portfolio\/(es|en)/, "")
      .replace(/^\/(es|en)/, "");

    // Construct new path (same logic as before)
    const newPath = `/portfolio/${selectedLang}${pathAfterLang}`;

    // Use fetch+DOM replace to avoid full reload (preserves DevTools emulation size)
    await fetchAndReplace(newPath, true);
  });

  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
    const path = window.location.pathname;
    // Replace current content to match the URL
    fetchAndReplace(path, false);
  });
}

