var article = document.querySelector('article');
var firstRun = true;
var lastIdMusique = 0;

recupererMusiques();

function recupererMusiques() {
  ajax("./server/musiques.php?lastId="+ lastIdMusique, "GET", "", function (reponse) {
    /*ORDRE CROISSANT
    reponse.forEach(function (musique) {
      var section = document.createElement('section');
      var img = document.createElement('div');
      img.className = "img";
      img.style.backgroundImage = "url(" + musique[0] + ")";
      img.style.backgroundSize = "101px 88px";
      section.appendChild(img);
      section.insertAdjacentHTML('beforeend', "<div><h3>" + musique[1] + "</h3><p>" + musique[2] + "</p><div><p>" + musique[3] + "</p><p>" + musique[4] + "</p></div></div>");
      article.appendChild(section);
    })
  
      for (var i = reponse.length - 1; i >= 0; i--) {
      var section = document.createElement('section');
      var img = document.createElement('div');
      img.className = "img";
      img.style.backgroundImage = "url(" + reponse[i][0] + ")";
      img.style.backgroundSize = "101px 88px";
      section.appendChild(img);
      section.insertAdjacentHTML('beforeend', "<div><h3>" + reponse[i][1] + "</h3><p>" + reponse[i][2] + "</p><div><p>" + reponse[i][3] + "</p><p>" + reponse[i][4] + "</p></div></div>");
      article.appendChild(section);
    }*/
  
  /*appendChild insertAdjacentHTML
  var more = document.createElement("span");
  more.insertAdjacentHTML('beforeend', 'More content');
  elem.appendChild(more);
  173,507
  ±3.23%
  79% slower
  
  appendChild TextNode
  var more = document.createElement("span");
  more.appendChild(document.createTextNode("More content"));
  elem.appendChild(more);
  653,114
  ±3.44%
  20% slower
  
  appendChild textContent (no html parser are used here)
  var more = document.createElement("span");
  more.textContent = "More content";
  elem.appendChild(more);
  815,905
  ±3.35%
  fastest
  
  insertAdjacentHTML
  elem.insertAdjacentHTML('beforeend', '<span>More content</span>');
  161,670
  ±6.80%
  81% slower
  
  appendChild innerHTML
  var more = document.createElement("span");
  more.innerHTML = "More content";
  elem.appendChild(more);
  172,499
  ±6.32%
  79% slower
  
  innerHTML+=
  elem.innerHTML += '<span>More content</span>';
  1,009
  ±2.38%
  100% slower*/
  
    // for (var i = reponse.length - 1; i >= 0; i--) {
    //   var lien = document.createElement('a');
    //   lien.href = reponse[i][0];
    //   lien.target = "_blank";
    //   var section = document.createElement('section');
    //   var img = document.createElement('div');
    //   img.className = "img";
    //   img.style.backgroundImage = "url(" + reponse[i][1] + ")";
    //   img.style.backgroundSize = "101px 88px";
    //   section.appendChild(img);
    //   var divPrincipale = document.createElement('div');
    //   var titre = document.createElement('h3');
    //   titre.innerText = reponse[i][2];
    //   divPrincipale.appendChild(titre);
    //   var artiste = document.createElement('p');
    //   artiste.innerText = reponse[i][3];
    //   divPrincipale.appendChild(artiste);
    //   var sousDivPrincipale = document.createElement('div');
    //   var duree = document.createElement('p');
    //   duree.innerText = reponse[i][4];
    //   sousDivPrincipale.appendChild(duree);
    //   var genre = document.createElement('p');
    //   genre.innerText = reponse[i][5];
    //   sousDivPrincipale.appendChild(genre);
    //   divPrincipale.appendChild(sousDivPrincipale);
    //   section.appendChild(divPrincipale);
    //   lien.appendChild(section);
    //   article.appendChild(lien);
    // }
    if (reponse.length > 2) {
      lastIdMusique = JSON.parse(reponse)[0];
      lastIdMusique = lastIdMusique['ID'];
      JSON.parse(reponse).forEach(function (musique) {
        var lien = document.createElement('a');
        lien.href = musique['UrlMusique'];
        lien.target = "_blank";
        lien.className = "lienSection";
        var section = document.createElement('section');
        var img = document.createElement('div');
        img.className = "img";
        img.style.backgroundImage = "url(" + musique['UrlImage'] + ")";
        img.style.backgroundSize = "101px 88px";
        section.appendChild(img);
        var divPrincipale = document.createElement('div');
        var titre = document.createElement('h3');
        titre.innerText = musique['Titre'];
        divPrincipale.appendChild(titre);
        var artiste = document.createElement('p');
        artiste.innerText = musique['Artiste'];
        divPrincipale.appendChild(artiste);
        var sousDivPrincipale = document.createElement('div');
        var duree = document.createElement('p');
        duree.innerText = musique['Duree'];
        sousDivPrincipale.appendChild(duree);
        var categorie = document.createElement('p');
        categorie.className = 'categorie';
        categorie.innerText = musique['Categorie'];
        sousDivPrincipale.appendChild(categorie);
        divPrincipale.appendChild(sousDivPrincipale);
        section.appendChild(divPrincipale);
        lien.appendChild(section);
        if (firstRun) {
          article.appendChild(lien);
        } else {
          article.insertAdjacentElement('afterbegin', lien);
        }
        liens = document.querySelectorAll('a');
      })
      firstRun = false;
    }
    setTimeout(recupererMusiques, 1000);
  })
}