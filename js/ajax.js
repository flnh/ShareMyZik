function ajax(url, methode, data, callback) {
  var req = new XMLHttpRequest();
  req.open(methode, url);

  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      callback(req.response);
    }
  }

  if (methode == "GET") {
    req.send(null);
  } else if (methode == "POST") {
    req.send(data);
  }
}