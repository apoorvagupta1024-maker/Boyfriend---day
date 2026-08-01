// Get elements
const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");
const envelope = document.querySelector(".envelope");
const beginBtn = document.getElementById("beginBtn");
const chapter1 = document.getElementById("chapter1");

// Open envelope
envelope.addEventListener("click", () => {

    // Play opening animation
    envelope.classList.add("open");

    // After animation, show the website
    setTimeout(() => {
        envelopeScreen.style.display = "none";
        website.style.display = "flex";
    }, 900);

});

// Scroll to Chapter 1
beginBtn.addEventListener("click", () => {
    chapter1.scrollIntoView({
        behavior: "smooth"
    });
});
