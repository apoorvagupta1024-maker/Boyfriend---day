const envelopeScreen = document.getElementById("envelopeScreen");
const homeScreen = document.getElementById("homeScreen");

envelopeScreen.addEventListener("click", function () {
    envelopeScreen.style.display = "none";
    homeScreen.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
});
