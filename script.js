
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const emailBtn = document.getElementById("emailBtn");
const message = document.getElementById("message");
const year = document.getElementById("year");

// Mobile navbar
menuBtn.onclick = function () {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", isOpen);
};

// Close menu after clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.onclick = function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
    };
});

// Open email application
emailBtn.onclick = function () {
    message.innerText = "Opening your email application...";

    window.location.href =
        "mailto:Deeshu969@gmail.com?subject=Portfolio%20Contact";
};

// Automatically update the copyright year
year.innerText = new Date().getFullYear();
