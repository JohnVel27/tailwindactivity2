document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("controls-carousel");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");

    let currentIndex = 0; // Index of the currently active slide

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle("hidden", i !== index);
            item.classList.toggle("block", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    // Event Listeners for Buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Auto-play feature (Optional)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Initialize first slide
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggle Mobile Menu
    menuBtn.addEventListener("click", function (event) {
        mobileMenu.classList.toggle("hidden");
        event.stopPropagation(); // Prevents the click event from bubbling up
    });

    // Click outside to close the menu
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });

    // Close menu when clicking a menu item
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
        });
    });
});