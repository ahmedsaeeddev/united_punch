function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);  // Toast disappears after 2 seconds
}

function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}
// JavaScript for Modal and Image Navigation
let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-item img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

// Open Modal
function openModal(index) {
    currentImageIndex = index;
    modalImage.src = images[currentImageIndex].src;
    modal.style.display = "flex";
}

// Close Modal
function closeModal() {
    modal.style.display = "none";
}

// Change Image
function changeImage(direction) {
    currentImageIndex += direction;

    // Loop images if out of bounds
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Go to the last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Go to the first image
    }

    // Update the modal image source
    modalImage.src = images[currentImageIndex].src;
}

// Close Modal When Clicking Outside the Content
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight * 0.85 && // Adjust trigger point (85% of screen height)
        rect.bottom >= 0
    );
}

// Function to add "visible" class when scrolling
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight * 0.85 && // Trigger when 85% of the section is in view
        rect.bottom >= 0
    );
}

// Function to add "visible" class when scrolling
function handleScrollAnimations() {
    document.querySelectorAll('.fade-in, .zoom-in, .navbar, .gallery-item, .newsletter-section, .vector-art-service, .footer, .banner-container, .digitizing-section').forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Run the function on scroll and load
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

