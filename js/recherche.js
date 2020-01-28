var titreCategorie = document.querySelector("#titreCategorie");
var btnRecherche = document.querySelector("#recherche");
var btnRechercheAnnuler = document.querySelector("#btnRechercheAnnuler");
var btnRechercheValider = document.querySelector("#btnRechercheValider");
var barreRecherche = document.querySelector("#barreRecherche");

btnRecherche.addEventListener("click", function (e) {
  if (e.target == btnRecherche) {
    titreCategorie.className = "rechercherOn";
    btnRecherche.className = "rechercherOn";
  }
})

btnRechercheAnnuler.addEventListener("click", function (e) {
  if (e.target == btnRechercheAnnuler && barreRecherche.value == "") {
    titreCategorie.className = "";
    btnRecherche.className = "";
  } else {
    barreRecherche.value = "";
  }
})