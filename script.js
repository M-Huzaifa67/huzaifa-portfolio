
document.addEventListener("DOMContentLoaded", () => {
    const includeEls = document.querySelectorAll('[include-html]');
    includeEls.forEach(el => {
        fetch(el.getAttribute('include-html'))
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;

                // Nav only
                if (el.id === "nav") {
                    setupNavHighlighting(el);
                    setupSmoothScroll(el);
                    setupMobileMenu(el);
                }
            });
    });

    const toggleDark = document.getElementById("toggleDark");
    toggleDark?.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
    });


});



function setupSmoothScroll(navEl) {
    const navLinks = navEl.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupNavHighlighting(navEl) {
    const navLinks = navEl.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var navbarBgColor = "bg-blue-500/20";
                var navbarTextColor = "text-white";
                // Remove active styles from all links
                navLinks.forEach(link => {
                    link.classList.remove(navbarBgColor, navbarTextColor); // Remove old styles
                });

                // Add active styles to current
                const activeLink = navEl.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                activeLink?.classList.add(navbarBgColor, navbarTextColor);
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));
}


function setupMobileMenu(navEl) {
    const menuToggle = navEl.querySelector("#menu-toggle");
    const navbar = navEl.querySelector("#navbar");

    menuToggle?.addEventListener("click", () => {
        navbar.classList.toggle("hidden");
    });
}



