var titreCategorie = document.querySelector("#titreCategorie");
var btnRecherche = document.querySelector("#recherche");
var btnRechercheAnnuler = document.querySelector("#btnRechercheAnnuler");
var btnRechercheValider = document.querySelector("#btnRechercheValider");
var barreRecherche = document.querySelector("#barreRecherche");
var liens;

btnRecherche.addEventListener("click", function (e) {
  if (e.target == btnRecherche) {
    titreCategorie.className = "rechercherOn";
    btnRecherche.className = "rechercherOn";
  }
})

btnRechercheAnnuler.addEventListener("click", function (e) {
  if (e.target == btnRechercheAnnuler && barreRecherche.value == "") {
    barreRecherche.className = "rechercherOff";
    setTimeout(function () {
      titreCategorie.className = "";
      btnRecherche.className = "";
      barreRecherche.className = "";
    }, 1100)
  } else {
    barreRecherche.value = "";
    liens.forEach(function (musique) {
      musique.style.display = "flex";
    })
  }
})

barreRecherche.addEventListener('input', function (e) {
  liens.forEach(function (musique) {
    musique.style.display = "flex";
    var titre = musique.querySelector('h3');
    var artiste = musique.querySelector('h3 + p');
    if (titre.innerText.toLowerCase().search(barreRecherche.value.toLowerCase()) == -1 && artiste.innerText.toLowerCase().search(barreRecherche.value.toLowerCase()) == -1) {
      musique.style.display = "none";
    }
  })
})