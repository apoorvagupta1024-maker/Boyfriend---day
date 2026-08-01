const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");

const beginBtn = document.getElementById("beginBtn");
const chapter2 = document.getElementById("chapter2");

// Open the website
envelopeScreen.addEventListener("click", function () {
    envelopeScreen.style.display = "none";
    website.style.display = "flex";
});

beginBtn.addEventListener("click", function () {
    alert("Button clicked!");
});
