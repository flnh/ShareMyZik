var titreCategorie = document.querySelector("#titreCategorie");
var btnRecherche = document.querySelector("#recherche");
var btnRechercheAnnuler = document.querySelector("#btnRechercheAnnuler");
var btnRechercheValider = document.querySelector("#btnRechercheValider");

btnRecherche.addEventListener("click", function (e) {
  if (e.target == btnRecherche) {
    titreCategorie.className = "rechercherOn";
    btnRecherche.className = "rechercherOn";
  }
})

btnRechercheAnnuler.addEventListener("click", function (e) {
  if (e.target == btnRechercheAnnuler) {
    titreCategorie.className = "";
    btnRecherche.className = "";
  }
})