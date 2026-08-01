const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");
const beginBtn = document.getElementById("beginBtn");
const chapter1 = document.getElementById("chapter1");

// Open the website
envelopeScreen.addEventListener("click", () => {
    envelopeScreen.style.display = "none";
    website.style.display = "block";
});

// Scroll to Chapter 1
beginBtn.addEventListener("click", () => {
    chapter1.scrollIntoView({
        behavior: "smooth"
    });
});
