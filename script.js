document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const tabLinks = document.querySelectorAll('.tab-link, .mob-tab-link');
    const scrollContainer = document.getElementById('scroll-container');
    const sections = document.querySelectorAll('#scroll-container .content-section');

    let isScrollingByClick = false;
    let isScrollingByTouch = false;
    let scrollTimeout;
    let observer;
    let currentSection = 'home';
    let touchStartY = 0;

    // --- Mobile Menu Toggle ---
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.style.display = 'block';
        requestAnimationFrame(() => mobileMenu.classList.add('open'));
    });

    // --- Close Mobile Menu on Outside Click ---
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('open') &&
            !mobileMenu.contains(e.target) &&
            e.target !== menuToggle) {
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

        if (window.location.hash !== `#${sectionId}`) {
            history.replaceState(null, null, `#${sectionId}`);
        }
    };

    // --- Improved scrollToSection function ---
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            isScrollingByClick = true;
            
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

    // --- Touch Event Handlers ---
    const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
        isScrollingByTouch = true;
    };

    const handleTouchMove = (e) => {
        if (!isScrollingByTouch) return;
        
        const touchY = e.touches[0].clientY;
        const diff = touchStartY - touchY;
        
        // Prevent default only if we're not at the top/bottom of page
        if ((window.scrollY > 0 || diff < 0) && 
            (window.scrollY < document.body.scrollHeight - window.innerHeight || diff > 0)) {
            e.preventDefault();
        }
    };

    const handleTouchEnd = () => {
        isScrollingByTouch = false;
    };

    // --- Enhanced Intersection Observer ---
    const initObserver = () => {
        if (observer) {
            sections.forEach(section => observer.unobserve(section));
        }

        observer = new IntersectionObserver((entries) => {
            if (isScrollingByClick || isScrollingByTouch) return;

            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const sectionId = entry.target.dataset.section;
                    setActiveTab(sectionId);
                }
            });
        }, {
            threshold: [0.35, 0.65],
            rootMargin: '0px 0px -25% 0px'
        });

        sections.forEach(section => observer.observe(section));
    };

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

    // --- Handle Initial Load ---
    const handleInitialLoad = () => {
        const hash = window.location.hash.substring(1);
        const validSections = Array.from(sections).map(s => s.id);

        if (hash && validSections.includes(hash)) {
            setActiveTab(hash);
            setTimeout(() => scrollToSection(hash), 100);
        } else {
            setActiveTab('home');
        }
    };

    // --- Initialize ---
    const init = () => {
        // Add touch event listeners
        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);

        initObserver();
        handleInitialLoad();
    };

    init();

    // Cleanup
    window.addEventListener('beforeunload', () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    });
});