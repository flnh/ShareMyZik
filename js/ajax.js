function ajax(url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url);

  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      callback(JSON.parse(req.response));
    }
  }

  req.send(null);
}