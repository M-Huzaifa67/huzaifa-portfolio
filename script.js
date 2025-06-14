


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const tabLinks = document.querySelectorAll('.tab-link, .mob-tab-link');
  const scrollContainer = document.getElementById('scroll-container');
  const sections = document.querySelectorAll('#scroll-container .content-section');

  let isScrollingByClick = false;
  let scrollTimeout;
  let observer;
  let currentSection = 'home'; // Track current section globally

  // --- Mobile Menu Toggle ---
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.style.display = 'block';
    requestAnimationFrame(() => mobileMenu.classList.add('open'));
  });

  // --- Close Mobile Menu on Outside Click ---
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open')
      && !mobileMenu.contains(e.target)
      && e.target !== menuToggle) {
      mobileMenu.classList.remove('open');
      setTimeout(() => mobileMenu.style.display = 'none', 300);
    }
  });

  // --- Set Active Tab ---
  const setActiveTab = (sectionId) => {
    currentSection = sectionId;
    tabLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });

    // Update URL hash without triggering scroll
    if (window.location.hash !== `#${sectionId}`) {
      history.replaceState(null, null, `#${sectionId}`);
    }
  };

 // Improved scrollToSection function
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    isScrollingByClick = true;
    
    // Calculate position accounting for fixed header
    const headerHeight = 64;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionTop - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrollingByClick = false;
    }, 1000);
  }
};

// Update Intersection Observer config
observer = new IntersectionObserver((entries) => {
  if (isScrollingByClick) return;
  
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
      const sectionId = entry.target.dataset.section;
      setActiveTab(sectionId);
    }
  });
}, {
  threshold: [0.35, 0.65], // More reliable trigger points
  rootMargin: '0px 0px -50% 0px' // Adjusts the trigger zone
});


  // --- Handle Tab Clicks ---
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      setActiveTab(sectionId);
      scrollToSection(sectionId);

      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        setTimeout(() => mobileMenu.style.display = 'none', 300);
      }
    });
  });

  // --- Setup Intersection Observer ---
  const initObserver = () => {
    if (observer) {
      sections.forEach(section => observer.unobserve(section));
    }

    observer = new IntersectionObserver((entries) => {
      if (isScrollingByClick) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.dataset.section;
          setActiveTab(sectionId);
        }
      });
    }, {
      threshold: 0.5 // or 0.4 if you want it more sensitive
    });


    sections.forEach(section => {
      observer.observe(section);
    });
  };

  // --- Handle Initial Load and Hash ---
  const handleInitialLoad = () => {
    const hash = window.location.hash.substring(1);
    const validSections = Array.from(sections).map(s => s.id);

    if (hash && validSections.includes(hash)) {
      setActiveTab(hash);
      scrollToSection(hash);
    } else {
      setActiveTab('home');
      scrollToSection('home');
    }
  };

  // --- Handle Resize Events ---
  const handleResize = () => {
    // Reinitialize observer on resize to ensure proper detection
    initObserver();

    // Scroll to current section to maintain sync
    if (currentSection) {
      scrollToSection(currentSection);
    }
  };

  // --- Initialize ---
  initObserver();
  handleInitialLoad();

  // Add event listeners
  window.addEventListener('resize', handleResize);
  window.addEventListener('hashchange', handleInitialLoad);
});


