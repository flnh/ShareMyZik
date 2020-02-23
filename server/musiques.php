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
  require('./bdd.php');
  
  if (isset($_GET['lastId']) && is_numeric($_GET['lastId'])) {
    $req = $bdd->prepare('SELECT musiques.ID, musiques.Titre, musiques.Artiste, musiques.Duree, categorie.Categorie, musiques.UrlMusique, musiques.UrlImage FROM musiques INNER JOIN `categorie` ON musiques.Categorie = categorie.ID_Categorie WHERE musiques.ID > ' . $_GET['lastId'] . ' ORDER BY ID DESC');
    $req->execute();
  
    $tabSortie = [];
    $i = 0;
  
    while($donnees = $req->fetch()) {
      $tabSortie[$i]['ID'] = $donnees['ID'];
      $tabSortie[$i]['Titre'] = $donnees['Titre'];
      $tabSortie[$i]['Artiste'] = $donnees['Artiste'];
      $tabSortie[$i]['Duree'] = $donnees['Duree'];
      $tabSortie[$i]['Categorie'] = $donnees['Categorie'];
      $tabSortie[$i]['UrlMusique'] = $donnees['UrlMusique'];
      $tabSortie[$i]['UrlImage'] = $donnees['UrlImage'];
      $i++;
    }
  
    $req->closeCursor();
  
    echo json_encode($tabSortie);
  }
?>