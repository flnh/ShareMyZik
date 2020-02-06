function ajax(url, methode, data, callback) {
  var musique = new FormData();
  var req = new XMLHttpRequest();
  req.open(methode, url);

  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      console.log(req.response);
      callback(JSON.parse(req.response));
    }
  }

  if (methode == "GET") {
    req.send(null);
  } else if (methode == "POST") {
    musique.append('Titre', data['Titre']);
    musique.append('Artiste', data['Artiste']);
    musique.append('Duree', data['Duree']);
    musique.append('Genre', data['Genre']);
    musique.append('UrlMusique', data['UrlMusique']);
    musique.append('UrlImage', data['UrlImage']);
    req.send(musique);
  }
}