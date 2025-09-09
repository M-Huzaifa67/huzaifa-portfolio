export function initPageScripts() {
  // mobile menu toggle & nav click behavior & intersection observer
  const menuToggle = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobile-menu-card");
  const links = document.querySelectorAll(".tab-link, .mob-tab-link");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    document.addEventListener("click", (e) => {
      if (!mobileMenu.classList.contains("hidden")
          && !mobileMenu.contains(e.target)
          && e.target !== menuToggle) {
             e.stopPropagation();
        mobileMenu.classList.add("hidden");
      }
    });
  }

  links.forEach(link => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      const id = link.dataset.section;
      const sec = document.getElementById(id);
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      if (mobileMenu) mobileMenu.classList.add("hidden");
    });
  });

  function setActive(id) {
    links.forEach(l => l.classList.toggle("active", l.dataset.section === id));
    history.replaceState(null, "", `#${id}`);
  }

  // IntersectionObserver for updating active nav
  const sections = document.querySelectorAll(".content-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    });
  }, { threshold: 0.5 });
  sections.forEach(s => observer.observe(s));

  // Theme toggle
const themeToggle = document.getElementById("themeToggle");

// ✅ Force dark mode initially
if (!localStorage.getItem("theme")) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
} else if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  });
}


  // on initial load set active from hash or home
  const hash = location.hash.replace("#", "") || "home";
  setTimeout(() => setActive(hash), 100);
}
