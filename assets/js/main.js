// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const mainNavList = document.getElementById("main-nav-list");

    if (navToggle && mainNavList) {
        navToggle.addEventListener("click", () => {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

            // Toggle ARIA attribute
            navToggle.setAttribute("aria-expanded", !isExpanded);

            // Toggle the .is-open class on the nav list
            mainNavList.classList.toggle("is-open");
        });
    } else {
        console.warn("Mobile navigation elements not found.");
    }
});
