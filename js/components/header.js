export function renderHeader(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
    <header class="flex fixed top-0 w-full justify-center z-20">
    <div class="header w-[92%] sm:w-[80%] h-[64px] flex justify-between items-center">
      <div class="flex-1 text-md md:text-lg whitespace-nowrap font-bold">👋 Welcome</div>

      <div class="w-3/4 justify-center hidden md:block">
        <nav class="nav">
          <div class="flex justify-center items-center">
            <a href="#home" class="tab-link active" data-section="home"><span>Home</span></a>
            <a href="#about" class="tab-link" data-section="about"><span>About</span></a>
            <a href="#experiences" class="tab-link" data-section="experiences"><span>Experience</span></a>
            <a href="#skills" class="tab-link" data-section="skills"><span>Skills</span></a>
            <a href="#projects" class="tab-link" data-section="projects"><span>Projects</span></a>
            <a href="#contact" class="tab-link" data-section="contact"><span>Contact</span></a>
          </div>
        </nav>
      </div>


      <div class="flex-1 flex justify-end items-center gap-3">
        <button id="themeToggle" class="p-1 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-black">
          <span id="lightIcon" class="dark:hidden">🌙</span>
          <span id="darkIcon" class="hidden dark:inline">☀️</span>
        </button>

        <button id="mobileMenuBtn" class="md:hidden">
          <i class="fas fa-bars text-lg pointer-events-none"></i>
        </button>
      </div>

    </div>
  </header>

   <nav id="mobile-menu-card" class="mobile-menu-card hidden">
      <a href="#home" class="mob-tab-link active" data-section="home"><span>Home</span></a>
      <a href="#about" class="mob-tab-link" data-section="about"><span>About</span></a>
      <a href="#experiences" class="mob-tab-link" data-section="experiences"><span>Experience</span></a>
      <a href="#skills" class="mob-tab-link" data-section="skills"><span>Skills</span></a>
      <a href="#projects" class="mob-tab-link" data-section="projects"><span>Projects</span></a>
      <a href="#contact" class="mob-tab-link" data-section="contact"><span>Contact</span></a>
  </nav>
  `;

}

// set theme
// document.addEventListener('DOMContentLoaded', () => {

    // mobile menu toggle & nav click behavior & intersection observer
//     const menuToggle = document.getElementById("mobileMenuBtn");
//     const mobileMenu = document.getElementById("mobile-menu-container");
//     const links = document.querySelectorAll(".tab-link, .mob-tab-link");

//     if (menuToggle && mobileMenu) {
//         menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
//         document.addEventListener("click", (e) => {
//             if (!mobileMenu.classList.contains("hidden")
//                 && !mobileMenu.contains(e.target)
//                 && e.target !== menuToggle) {
//                 mobileMenu.classList.add("hidden");
//             }
//         });
//     }

//     links.forEach(link => {
//         link.addEventListener("click", (ev) => {
//             ev.preventDefault();
//             const id = link.dataset.section;
//             const sec = document.getElementById(id);
//             if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
//             setActive(id);
//             if (mobileMenu) mobileMenu.classList.add("hidden");
//         });
//     });

//     function setActive(id) {
//         links.forEach(l => l.classList.toggle("active", l.dataset.section === id));
//         history.replaceState(null, "", `#${id}`);
//     }

//     // IntersectionObserver for updating active nav
//     const sections = document.querySelectorAll(".content-section");
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(e => {
//             if (e.isIntersecting) setActive(e.target.id);
//         });
//     }, { threshold: 0.6 });
//     sections.forEach(s => observer.observe(s));

//     // Theme toggle
//     const themeToggle = document.getElementById("themeToggle");
//     if (themeToggle) {
//         themeToggle.addEventListener("click", () => {
//             document.documentElement.classList.toggle("dark");
//             localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
//         });
//     }

//     // on initial load set active from hash or home
//     const hash = location.hash.replace("#", "") || "home";
//     setTimeout(() => setActive(hash), 100);


// // });
