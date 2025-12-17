export function initLanguageSwitcher(): void {
  const select = document.getElementById(
    "lang-select"
  ) as HTMLSelectElement | null;

  select?.addEventListener("change", ({ target }) => {
    const selectedLang = (target as HTMLSelectElement).value;
    const currentPath = window.location.pathname;
    // Extract the path after /portfolio or /
    const pathAfterLang = currentPath
      .replace(/^\/portfolio\/(es|en)/, "")
      .replace(/^\/(es|en)/, "");
    const newPath = `/portfolio/${selectedLang}${pathAfterLang}`;
    window.location.pathname = newPath;
  });
}
