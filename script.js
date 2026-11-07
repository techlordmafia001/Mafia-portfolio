
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

    menuToggle.textContent = isExpanded ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// EMAIL AND WHATSAPP CONTACT DETAILS

const myEmail = "techmafia392@gmail.com";
const myWhatsApp = "2348137245375";

console.log("Portfolio loaded successfully.");
console.log("Email:", myEmail);
console.log("WhatsApp:", myWhatsApp);
