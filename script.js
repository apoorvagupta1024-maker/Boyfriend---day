const beginBtn = document.getElementById("beginBtn");
const chapter2 = document.getElementById("chapter2");

beginBtn.addEventListener("click", function () {
  chapter2.scrollIntoView({
    behavior: "smooth"
  });
});
