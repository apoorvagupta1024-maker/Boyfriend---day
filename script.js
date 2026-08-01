const envelope = document.getElementById("envelopeScreen");
const home = document.getElementById("homeScreen");

envelope.addEventListener("click", function () {

    envelope.style.display = "none";

    home.style.display = "flex";

});
