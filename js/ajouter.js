var formBtnValider = document.querySelector("#formBtnValider");
var ajouterTitre = document.querySelector("#ajouterTitre");
var ajouterArtiste = document.querySelector("#ajouterArtiste");
var ajouterDuree = document.querySelector("#ajouterDuree");
var ajouterCategorie = document.querySelector("#ajouterCategorie");
var ajouterUrlImg = document.querySelector("#ajouterURLImg");
var ajouterUrlMusique = document.querySelector("#ajouterURLMusique");

formBtnValider.addEventListener('click', function (e) {
  if (e.target == formBtnValider) {
    console.log('ok');
    var sortie = new Array();
    sortie['Titre'] = ajouterTitre.value;
    sortie['Artiste'] = ajouterArtiste.value;
    sortie['Duree'] = ajouterDuree.value;
    sortie['Genre'] = ajouterCategorie.value;
    sortie['UrlMusique'] = ajouterUrlImg.value;
    sortie['UrlImage'] = ajouterUrlImg.value;
    ajax('./server/addMusique.php', 'POST', sortie, function (e) {
      console.log(e);
    })
  }
})