document.addEventListener("DOMContentLoaded", function () {
    // Animate Navbar on Load
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("animate__animated", "animate__fadeInDown");

    // Elements to Animate on Scroll
    const blogs = document.querySelectorAll(".blog");
    const images = document.querySelectorAll(".blog-image img");
    const footerSections = document.querySelectorAll(".footer-section");

    function revealOnScroll(elements, animationClass) {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100 && !el.classList.contains(animationClass)) {
                el.classList.add("animate__animated", animationClass);
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    // Apply animations when scrolling
    window.addEventListener("scroll", function () {
        revealOnScroll(blogs, "animate__fadeInUp");
        revealOnScroll(images, "animate__zoomIn");
        revealOnScroll(footerSections, "animate__fadeIn");
    });

    // Mobile Menu Toggle with Smooth Animation
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function () {
            mobileMenu.classList.toggle("show");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".mobile-menu a").forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("show");
            });
        });
    }
});
