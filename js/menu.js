var hamburger = document.querySelector("#hamburger");
var fermerMenu = document.querySelector("#fermerMenu");

fermerMenu.addEventListener("click", function () {
  console.log("click");
  hamburger.checked = false;
})