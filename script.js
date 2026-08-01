const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");
const beginBtn = document.getElementById("beginBtn");
const chapter1 = document.getElementById("chapter1");

// Open the website
const envelopeScreen = document.getElementById("envelopeScreen");
const envelope = document.querySelector(".envelope");
const website = document.getElementById("website");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

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
