// Typing animation
const words = [
    "Web Developer",
    "Student",
    "Programmer",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const word = words[wordIndex];

    typing.textContent = word.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > word.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

// Dark and light mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Project details
function showProject(projectName) {
    alert("Project: " + projectName +
          "\nThis project is part of my portfolio.");
}

// Contact form demo
document.getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("response").textContent =
            "Thank you, " + name +
            "! Your form was submitted successfully in this demo.";

        this.reset();
    });