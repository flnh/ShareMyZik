var btnTheme = document.querySelector("#theme");
var listeLink = document.querySelectorAll("link");

var themeClair = "./css/clair.css";
var themeSombre = "./css/sombre.css"

btnTheme.addEventListener("click", function () {
  if (btnTheme.checked) {
    listeLink[0].href = themeClair;
  } else {
    listeLink[0].href = themeSombre;
  }
})