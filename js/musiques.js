var article = document.querySelector('article');

ajax("./server/musiques.php", function (reponse) {
  // ORDRE CROISSANT
  // reponse.forEach(function (musique) {
  //   var section = document.createElement('section');
  //   var img = document.createElement('div');
  //   img.className = "img";
  //   img.style.backgroundImage = "url(" + musique[0] + ")";
  //   img.style.backgroundSize = "101px 88px";
  //   section.appendChild(img);
  //   section.insertAdjacentHTML('beforeend', "<div><h3>" + musique[1] + "</h3><p>" + musique[2] + "</p><div><p>" + musique[3] + "</p><p>" + musique[4] + "</p></div></div>");
  //   article.appendChild(section);
  // })

  //ORDRE DECROISSANT
  for (var i = reponse.length - 1; i >= 0; i--) {
    var section = document.createElement('section');
    var img = document.createElement('div');
    img.className = "img";
    img.style.backgroundImage = "url(" + reponse[i][0] + ")";
    img.style.backgroundSize = "101px 88px";
    section.appendChild(img);
    section.insertAdjacentHTML('beforeend', "<div><h3>" + reponse[i][1] + "</h3><p>" + reponse[i][2] + "</p><div><p>" + reponse[i][3] + "</p><p>" + reponse[i][4] + "</p></div></div>");
    article.appendChild(section);
  }
})