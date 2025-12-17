export function initNavigation(): void {
  const navLinks = document.querySelectorAll("nav a[href*='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const sectionId = href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    });
  });

  const updateActiveLink = (): void => {
    let currentSection = "";

    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (isAtBottom) {
      currentSection = "about-me";
    } else {
      for (const link of navLinks) {
        const href = link.getAttribute("href");
        const sectionId = href?.split("#")[1];

        if (sectionId && sectionId !== "contact") {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sectionId;
            }
          }
        }
      }
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const sectionId = href?.split("#")[1];
      if (sectionId === currentSection) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}
