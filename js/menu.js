var hamburger = document.querySelector("#hamburger");
var blocMenu = document.querySelector("#blocMenu");

blocMenu.addEventListener("click", function () {
  console.log("click");
  hamburger.checked = false;
})