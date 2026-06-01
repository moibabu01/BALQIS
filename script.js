// Navbar effect when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

// Newsletter form
const form = document.querySelector(".newsletter form");
const emailInput = document.querySelector(".newsletter input");

if (form && emailInput) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (emailInput.value.trim() === "") {
            alert("Please enter your email.");
            return;
        }

        alert("Thank you! You are now on the launch list.");
        emailInput.value = "";
    });
}

const menuIcon = document.querySelector("#menuIcon");
const navLinks = document.querySelector("#navLinks");

if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


const waitlistBtn = document.querySelector("#waitlistBtn");

if (waitlistBtn) {
    waitlistBtn.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.innerHTML = "♥";
        } else {
            button.innerHTML = "♡";
        }
    });
});
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

    });

});
const quantityElement = document.getElementById("quantity");

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let quantity = 1;

plusBtn.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
});

minusBtn.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }

});