document.addEventListener("DOMContentLoaded", function () {
    const url = document.location.href;
    const navLinks = document.querySelectorAll('.nav-item a');

    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === url) {
            navLinks[i].parentNode.classList.add('current-nav-item');
            break;

        }
    }
});