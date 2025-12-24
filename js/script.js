/**
 * Global Website Core Logic
 * Handles: Preloader, Page Transitions, Language Swapping, and Scroll Effects
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Preloader Handling
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 200); // Reduced from 500ms
        });
        
        // Fallback for slow loaders (e.g. if a minor image is stuck)
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 3000); // Reduced from 5000ms

    }

    // 2. Page Transition Logic
    const transitionOverlay = document.querySelector('.page-transition-overlay');
    if (transitionOverlay) {
        function handlePageTransition(e) {
            const href = this.getAttribute('href');
            
            // Bypass for special links
            if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || this.target === '_blank') {
                return;
            }

            // Only transition for links in the same domain
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                transitionOverlay.classList.add('active');
                setTimeout(() => {
                    window.location.href = href;
                }, 600);
            }
        }

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', handlePageTransition);
        });

        // Handle browser back/forward buttons
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                transitionOverlay.classList.remove('active');
            }
        });
    }

    // 3. Scroll Reveal Logic (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => {
        revealObserver.observe(el);
    });

    // 4. Mobile Menu Logic
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // Close menu on link click
        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // 5. Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove("hidden");
            } else {
                backToTopButton.classList.add("hidden");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 6. Sticky Header & Glass Effect
    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.classList.add("glass-header", "shadow-lg");
            } else {
                nav.classList.remove("glass-header", "shadow-lg");
            }
        });
    }

    // 7. Active Link / Scroll Spy (Optimized for Performance)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    let sectionOffsets = [];

    function cacheSectionOffsets() {
        sectionOffsets = Array.from(sections).map(section => ({
            id: section.getAttribute('id'),
            top: section.offsetTop,
            height: section.offsetHeight
        }));
    }

    function updateActiveLink() {
        if (sectionOffsets.length === 0) cacheSectionOffsets();
        
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120; // Slightly larger offset for better accuracy

        sectionOffsets.forEach(section => {
            if (scrollPosition >= section.top && scrollPosition < section.top + section.height) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            link.classList.toggle('nav-link-active', href === currentSectionId);
            
            // Clean up custom Tailwind classes if necessary
            if (href === currentSectionId) {
                link.classList.remove('text-gray-600');
            } else {
                link.classList.add('text-gray-600');
            }
        });
    }

    // Refresh cache on resize
    window.addEventListener('resize', cacheSectionOffsets);
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial setup
    cacheSectionOffsets();
    updateActiveLink();

    // Smooth scroll and immediate focus on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('nav-link-active'));
            this.classList.add('nav-link-active');
        });
    });
});



