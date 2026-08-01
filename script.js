const envelopeScreen = document.getElementById("envelopeScreen");
const website = document.getElementById("website");

envelopeScreen.addEventListener("click", function () {
    envelopeScreen.style.display = "none";
    website.style.display = "flex";
});
