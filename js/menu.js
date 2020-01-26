var hamburger = document.querySelector("#hamburger");
var fermerMenu = document.querySelector("#fermerMenu");
var menu = document.querySelector("#menu");
var logo = document.querySelector("#logo")
var ajouter = document.querySelector("[for=\"ajouter\"]");
var categorie = document.querySelector("[for=\"categorie\"]");
var theme = document.querySelector("[for=\"theme\"]");

hamburger.addEventListener("click", function () {
  menu.className = "menuOuvert";
  fermerMenu.className = "menuOuvert";
  logo.className = "menuOuvert";
  ajouter.className = "menuOuvert";
  categorie.className = "menuOuvert";
  theme.className = "menuOuvert";
})

fermerMenu.addEventListener("click", function () {
  menu.className = "";
  fermerMenu.className = "";
  logo.className = "";
  ajouter.className = "";
  categorie.className = "";
  theme.className = "";
  hamburger.checked = false;
})