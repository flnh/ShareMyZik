<?php
  // $tabMusiques = [];
  // for ($i=0; $i < 1000; $i++) {
  //   $url = "./index.html";
  //   $image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/No_sign.svg/1024px-No_sign.svg.png";
  //   $titre = "Test " . $i;
  //   $artiste = "Monsieur Test " . $i;
  //   $duree = $i . "min";
  //   $genre = "zebiDance";
  //   $tabMusiques[] = [$url, $image, $titre, $artiste, $duree, $genre];
  // }
  // echo json_encode($tabMusiques);
  $bdd = new PDO('mysql:host=localhost;dbname=ShareMyZik;charset=utf8', 'root', '');

  $req = $bdd->prepare('SELECT * FROM musiques ORDER BY ID DESC');
  $req->execute();

  $tabSortie = [];
  $i = 0;

  while($donnees = $req->fetch()) {
    $tabSortie[$i]['ID'] = $donnees['ID'];
    $tabSortie[$i]['Titre'] = $donnees['Titre'];
    $tabSortie[$i]['Artiste'] = $donnees['Artiste'];
    $tabSortie[$i]['Duree'] = $donnees['Duree'];
    $tabSortie[$i]['Album'] = $donnees['Album'];
    $tabSortie[$i]['Genre'] = $donnees['Genre'];
    $tabSortie[$i]['UrlMusique'] = $donnees['UrlMusique'];
    $tabSortie[$i]['UrlImage'] = $donnees['UrlImage'];
    $i++;
  }

  $req->closeCursor();

  echo json_encode($tabSortie);
?>