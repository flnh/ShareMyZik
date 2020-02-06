var hamburger = document.querySelector("#hamburger");
var fermerMenu = document.querySelector("#fermerMenu");
var menu = document.querySelector("#menu");
var logo = document.querySelector("#logo")
var ajouter = document.querySelector("[for=\"ajouter\"]");
var categorie = document.querySelector("[for=\"categorie\"]");
var theme = document.querySelector("[for=\"theme\"]");
var btnAjouter = document.querySelector("#ajouter");
var eltAjouter = document.querySelector("#eltAjouter");
var formAjouter = document.querySelector("#formAjouter");
var btnCategorie = document.querySelector("#categorie");
var eltCategorie = document.querySelector("#eltCategorie");
var formCategorie = document.querySelector("#formCategorie");
var formBtnAnnuler = document.querySelector("#formBtnAnnuler");

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
  setTimeout(function () {
    hamburger.checked = false;
  }, 500);
})

logo.addEventListener("click", function () {
  menu.className = "";
  fermerMenu.className = "";
  logo.className = "";
  ajouter.className = "";
  categorie.className = "";
  theme.className = "";
  setTimeout(function () {
    hamburger.checked = false;
  }, 500);
})

btnAjouter.addEventListener("click", function () {
  eltAjouter.className = "menuOuvert";
  setTimeout(function () {
    formAjouter.className = "menuOuvert";
  }, 50);
})

eltAjouter.addEventListener("click", function (e) {
  if (e.target == eltAjouter) {
    formAjouter.className = "";
    setTimeout(function () {
      eltAjouter.className = "";
      btnAjouter.checked = false;
    }, 600);
  }
})

formBtnAnnuler.addEventListener("click", function (e) {
  if (e.target == formBtnAnnuler) {
    if (ajouterTitre.value == "" && ajouterArtiste.value == "" && ajouterDuree.value == "" && ajouterCategorie.value == "" && ajouterUrlMusique.value == "" && ajouterUrlImg.value == "") {
      formAjouter.className = "";
      setTimeout(function () {
        eltAjouter.className = "";
        btnAjouter.checked = false;
      }, 600);
    } else {
      ajouterTitre.value = "";
      ajouterArtiste.value = "";
      ajouterDuree.value = "";
      ajouterCategorie.value = "";
      ajouterUrlMusique.value = "";
      ajouterUrlImg.value = "";
    }
  }
})

btnCategorie.addEventListener("click", function () {
  eltCategorie.className = "menuOuvert";
  setTimeout(function () {
    formCategorie.className = "menuOuvert";
  }, 50);
})

eltCategorie.addEventListener("click", function (e) {
  if (e.target == eltCategorie) {
    formCategorie.className ="";
    setTimeout(function () {
      eltCategorie.className = "";
      btnCategorie.checked = false;
    }, 600);
  }
})