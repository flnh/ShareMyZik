var formBtnValider = document.querySelector("#formBtnValider");
var ajouterTitre = document.querySelector("#ajouterTitre");
var ajouterArtiste = document.querySelector("#ajouterArtiste");
var ajouterDuree = document.querySelector("#ajouterDuree");
var ajouterCategorie = document.querySelector("#ajouterCategorie");
var ajouterUrlImg = document.querySelector("#ajouterURLImg");
var ajouterUrlMusique = document.querySelector("#ajouterURLMusique");

formBtnValider.addEventListener('click', function (e) {
  if (e.target == formBtnValider) {
    var sortie = new FormData;
    sortie.append('Titre', ajouterTitre.value);
    sortie.append('Artiste', ajouterArtiste.value);
    sortie.append('Duree', ajouterDuree.value);
    sortie.append('Categorie', ajouterCategorie.value);
    sortie.append('UrlMusique', ajouterUrlMusique.value);
    sortie.append('UrlImage', ajouterUrlImg.value);
    ajax('./server/addMusique.php', 'POST', sortie, function () {
      formAjouter.className = "";
      setTimeout(function () {
        eltAjouter.className = "";
        btnAjouter.checked = false;
        menu.className = "";
        fermerMenu.className = "";
        logo.className = "";
        ajouter.className = "";
        categorie.className = "";
        theme.className = "";
        setTimeout(function () {
          hamburger.checked = false;
        }, 500);
      }, 600);
    })
  }
})