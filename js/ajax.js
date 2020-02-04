function ajax(url, methode, data, callback) {
  var musique = new FormData();
  var req = new XMLHttpRequest();
  req.open(methode, url);

  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      callback(JSON.parse(req.response));
    }
  }

  if (methode == "GET") {
    req.send(null);
  } else if (methode == "POST") {
    musique.append('ID', data['ID']);
    musique.append('Titre', data['Titre']);
    musique.append('Artiste', data['Artiste']);
    musique.append('Duree', data['Duree']);
    musique.append('UrlMusique', data['UrlMusique']);
    musique.append('UrlImage', data['UrlImage']);
    req.send(musique);
  }
}