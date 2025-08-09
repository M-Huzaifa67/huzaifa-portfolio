
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".tab-link, .mob-tab-link");
  const sections = document.querySelectorAll(".content-section");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // --- Toggle Mobile Menu ---
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

    // --- Close Mobile Menu on Outside Click ---
    document.addEventListener("click", (e) => {
        if (mobileMenu && !mobileMenu.classList.contains("hidden") &&
            !mobileMenu.contains(e.target) && e.target !== menuToggle) {
            mobileMenu.classList.add("hidden");
        }
        });


  // --- Smooth Scroll + Close Menu ---
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.dataset.section;
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });

  // --- Set Active Tab ---
  function setActiveTab(id) {
    links.forEach(link => {
      link.classList.toggle("active", link.dataset.section === id);
    });
  }

  // --- Scroll Observer for Active Tab ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.dataset.section;
        setActiveTab(id);
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});





// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menu-toggle');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const tabLinks = document.querySelectorAll('.tab-link, .mob-tab-link');
//     const scrollContainer = document.getElementById('scroll-container');
//     const sections = document.querySelectorAll('#scroll-container .content-section');

//     let isScrollingByClick = false;
//     let scrollTimeout;
//     let observer;
//     let currentSection = 'home';

//     // --- Mobile Menu Toggle ---
//     menuToggle.addEventListener('click', (e) => {
//         e.stopPropagation();
//         mobileMenu.style.display = 'block';
//         requestAnimationFrame(() => mobileMenu.classList.add('open'));
//     });

//     // --- Close Mobile Menu on Outside Click ---
//     document.addEventListener('click', (e) => {
//         if (mobileMenu.classList.contains('open') &&
//             !mobileMenu.contains(e.target) &&
//             e.target !== menuToggle) {
//             mobileMenu.classList.remove('open');
//             setTimeout(() => mobileMenu.style.display = 'none', 300);
//         }
//     });

//     // --- Set Active Tab ---
//     const setActiveTab = (sectionId) => {
//         currentSection = sectionId;
//         tabLinks.forEach(link => {
//             link.classList.toggle('active', link.dataset.section === sectionId);
//         });

//         if (window.location.hash !== `#${sectionId}`) {
//             history.replaceState(null, null, `#${sectionId}`);
//         }
//     };

//     // --- Scroll to Section ---
//     const scrollToSection = (sectionId) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             isScrollingByClick = true;

//             const headerHeight = 64;
//             const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
//             const offsetPosition = sectionTop - headerHeight;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });

//             clearTimeout(scrollTimeout);
//             scrollTimeout = setTimeout(() => {
//                 isScrollingByClick = false;
//             }, 1000);
//         }
//     };

//     // --- Intersection Observer ---
//     const initObserver = () => {
//         if (observer) {
//             sections.forEach(section => observer.unobserve(section));
//         }

//         observer = new IntersectionObserver((entries) => {
//             if (isScrollingByClick) return;

//             entries.forEach(entry => {
//                 if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//                     const sectionId = entry.target.dataset.section;
//                     setActiveTab(sectionId);
//                 }
//             });
//         }, {
//             threshold: [0.35, 0.65],
//             rootMargin: '0px 0px -25% 0px'
//         });

//         sections.forEach(section => observer.observe(section));
//     };

//     // --- Handle Tab Clicks ---
//     tabLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const sectionId = link.dataset.section;
//             setActiveTab(sectionId);
//             scrollToSection(sectionId);

//             if (mobileMenu.classList.contains('open')) {
//                 mobileMenu.classList.remove('open');
//                 setTimeout(() => mobileMenu.style.display = 'none', 300);
//             }
//         });
//     });

//     // --- Initial Load ---
//     const handleInitialLoad = () => {
//         const hash = window.location.hash.substring(1);
//         const validSections = Array.from(sections).map(s => s.id);

//         if (hash && validSections.includes(hash)) {
//             setActiveTab(hash);
//             setTimeout(() => scrollToSection(hash), 100);
//         } else {
//             setActiveTab('home');
//         }
//     };

//     const init = () => {
//         // Prevent scroll freeze on iOS
//         document.body.style.touchAction = 'manipulation';

//         initObserver();
//         handleInitialLoad();
//     };

//     init();
// });
