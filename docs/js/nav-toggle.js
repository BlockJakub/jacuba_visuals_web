// Mobile navigation toggle
// Handles hamburger menu open/close for .site-nav

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.site-nav');
    const toggle = document.querySelector('.site-nav-toggle');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('site-nav--open');
            toggle.classList.toggle('site-nav-toggle--open');
        });
    }
});
