<?php
  $tabMusiques = [];
  for ($i=0; $i < 1000; $i++) {
    $url = "./index.html";
    $image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/No_sign.svg/1024px-No_sign.svg.png";
    $titre = "Test " . $i;
    $artiste = "Monsieur Test " . $i;
    $duree = $i . "min";
    $genre = "zebiDance";
    $tabMusiques[] = [$url, $image, $titre, $artiste, $duree, $genre];
  }
  echo json_encode($tabMusiques);
?>