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

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle") as HTMLElement | null;
  const navUl = document.querySelector("nav ul") as HTMLUListElement | null;

  if (menuToggle && navUl) {
    // Narrowed, typed references for correct event overloads
    const menuToggleEl = menuToggle;
    const navUlEl = navUl;

    const langForm = document.querySelector<HTMLFormElement>("#lang-form");
    let langFormOriginalParent: Node | null = null;
    let langFormOriginalNextSibling: ChildNode | null = null;

    const attachLangFormToNav = () => {
      if (langForm && !navUlEl.contains(langForm)) {
        langFormOriginalParent = langForm.parentNode;
        langFormOriginalNextSibling = langForm.nextSibling;
        navUlEl.appendChild(langForm);
        langForm.classList.add("mobile-lang-form");
      }
    };

    const restoreLangForm = () => {
      if (langForm && langFormOriginalParent) {
        if (langFormOriginalNextSibling) {
          langFormOriginalParent.insertBefore(langForm, langFormOriginalNextSibling);
        } else {
          langFormOriginalParent.appendChild(langForm);
        }
        langForm.classList.remove("mobile-lang-form");
      }
    };

    const openMenu = () => {
      navUlEl.classList.add("active");
      attachLangFormToNav();
    };

    const closeMenu = () => {
      navUlEl.classList.remove("active");
      restoreLangForm();
    };

    const toggleMenu = () => {
      if (navUlEl.classList.contains("active")) closeMenu();
      else openMenu();
    };

    menuToggleEl.addEventListener("click", toggleMenu);

    menuToggleEl.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Close menu when clicking a nav link (useful on mobile)
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    // Close on Escape
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close menu if viewport becomes >= md while open (CSS breakpoint uses max-width: 768px)
    const mq = window.matchMedia("(min-width: 769px)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };

    if (mq.addEventListener) mq.addEventListener("change", handleMediaChange);
    else mq.addListener((e: any) => handleMediaChange(e));

    // Ensure closed on load if viewport is large
    if (mq.matches) closeMenu();
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}
