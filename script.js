const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");

const beginBtn = document.getElementById("beginBtn");
const chapter2 = document.getElementById("chapter2");

// Open the website
envelopeScreen.addEventListener("click", function () {
    envelopeScreen.style.display = "none";
    website.style.display = "flex";
});

// Scroll to Chapter 1
beginBtn.addEventListener("click", function () {
    chapter2.scrollIntoView({
        behavior: "smooth"
    });
});
