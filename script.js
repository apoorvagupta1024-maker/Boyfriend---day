// Get elements
const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");
const envelope = document.querySelector(".envelope");

const beginBtn = document.getElementById("beginBtn");
const chapter1 = document.getElementById("chapter1");

const next1 = document.getElementById("next1");
const chapter2 = document.getElementById("chapter2");

// Open envelope
envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.style.display = "none";
        website.style.display = "block";
        window.scrollTo(0, 0);
    }, 900);

});

// Hero → Chapter 1
beginBtn.addEventListener("click", () => {
    chapter1.scrollIntoView({
        behavior: "smooth"
    });
});

// Chapter 1 → Chapter 2
next1.addEventListener("click", () => {
    chapter2.scrollIntoView({
        behavior: "smooth"
    });
});
