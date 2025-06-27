document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const tabLinks = document.querySelectorAll('.tab-link, .mob-tab-link');
  const scrollContainer = document.getElementById('scroll-container');
  const sections = document.querySelectorAll('#scroll-container .content-section');

  let isScrollingByClick = false;
  let currentSection = 'home';
  let scrollTimeout;
  let observer;

  const isMobile = () => window.innerWidth <= 768; // adjust as needed

  // -------------------------------
  // Utility: Set Active Tab
  // -------------------------------
  const setActiveTab = (sectionId) => {
    currentSection = sectionId;
    tabLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });
    history.replaceState(null, null, `#${sectionId}`);
  };

  // -------------------------------
  // Smooth Scroll to Section
  // -------------------------------
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    isScrollingByClick = true;

    const headerOffset = 64;
    const offsetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrollingByClick = false;
    }, 800);
  };

  // -------------------------------
  // Intersection Observer for Desktop Only
  // -------------------------------
  const initObserver = () => {
    if (observer) {
      sections.forEach(section => observer.unobserve(section));
    }

    if (isMobile()) return; // ✅ Do not activate on mobile

    observer = new IntersectionObserver((entries) => {
      if (isScrollingByClick) return;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setActiveTab(entry.target.dataset.section);
        }
      });
    }, {
      threshold: [0.4],
      rootMargin: '0px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
  };

  // -------------------------------
  // Handle Tab Click
  // -------------------------------
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      if (!sectionId) return;

      setActiveTab(sectionId);
      scrollToSection(sectionId);

      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        setTimeout(() => mobileMenu.style.display = 'none', 300);
      }
    });
  });

  // -------------------------------
  // Mobile Menu Toggle
  // -------------------------------
  menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.style.display = 'block';
    requestAnimationFrame(() => {
      mobileMenu.classList.add('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open')
      && !mobileMenu.contains(e.target)
      && e.target !== menuToggle) {
      mobileMenu.classList.remove('open');
      setTimeout(() => mobileMenu.style.display = 'none', 300);
    }
  });

  // -------------------------------
  // Handle Initial Page Load
  // -------------------------------
  const handleInitialLoad = () => {
    const hash = window.location.hash.replace('#', '');
    const validSections = Array.from(sections).map(s => s.id);

    if (hash && validSections.includes(hash)) {
      setActiveTab(hash);
      scrollToSection(hash);
    } else {
      setActiveTab('home');
      scrollToSection('home');
    }
  };

  // -------------------------------
  // Handle Resize
  // -------------------------------
  const handleResize = () => {
    initObserver(); // Re-init observer only if desktop
    if (currentSection) scrollToSection(currentSection);
  };

  // -------------------------------
  // Initialize
  // -------------------------------
  initObserver();
  handleInitialLoad();

  window.addEventListener('resize', handleResize);
  window.addEventListener('hashchange', handleInitialLoad);
});
