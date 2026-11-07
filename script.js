// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    if (window.lucide) {
        lucide.createIcons();
    }

});


// Close menu after clicking a navigation link

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML =
            '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }

    });

});


// =================================
// SCROLL REVEAL ANIMATION
// =================================

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


// =================================
// ROTATING PROFESSIONAL TITLES
// =================================

const roles = [

    "Web Developer",

    "Creative Designer",

    "EdTech Enthusiast"

];

const roleElement = document.getElementById("rotatingRole");

let roleIndex = 0;


setInterval(() => {

    roleIndex = (roleIndex + 1) % roles.length;

    roleElement.style.opacity = "0";

    setTimeout(() => {

        roleElement.textContent = roles[roleIndex];

        roleElement.style.opacity = "1";

    }, 220);

}, 2600);


// =================================
// AUTOMATIC FOOTER YEAR
// =================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =================================
// INITIALISE LUCIDE ICONS
// =================================

if (window.lucide) {

    lucide.createIcons();

}
