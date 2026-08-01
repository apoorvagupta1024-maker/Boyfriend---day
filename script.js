const envelope = document.getElementById("envelopeScreen");
const home = document.getElementById("homeScreen");

console.log(envelope);
console.log(home);

envelope.addEventListener("click", function () {
    alert("Envelope clicked!");
    envelope.style.display = "none";
    home.style.display = "flex";
});
