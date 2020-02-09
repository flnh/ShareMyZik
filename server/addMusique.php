<?php
  if (isset($_POST['Titre']) && isset($_POST['Artiste']) && isset($_POST['Duree']) && isset($_POST['Genre']) && isset($_POST['UrlMusique']) && isset($_POST['UrlImage']) && count($_POST['Titre']) <= 1000 && count($_POST['Artiste']) <= 1000 && count($_POST['Duree']) && count($_POST['Genre']) <= 100 && count($_POST['UrlMusique']) <= 1000 && filter_var($_POST['UrlMusique'], FILTER_VALIDATE_URL) && count($_POST['UrlImage']) <= 1000 && filter_var($_POST['UrlImage'], FILTER_VALIDATE_URL)) {
    require('./bdd.php');
    $req = $bdd->prepare('INSERT INTO musiques(ID, Titre, Artiste, Duree, Genre, UrlMusique, UrlImage) VALUES(NULL, :Titre, :Artiste, :Duree, :Genre, :UrlMusique, :UrlImage)');

    $req->execute(array(
      'Titre' => htmlspecialchars($_POST['Titre']),
      'Artiste' => htmlspecialchars($_POST['Artiste']),
      'Duree' => htmlspecialchars($_POST['Duree']),
      'Genre' => htmlspecialchars($_POST['Genre']),
      'UrlMusique' => htmlspecialchars($_POST['UrlMusique']),
      'UrlImage' => htmlspecialchars($_POST['UrlImage'])
    ));

    $req->closeCursor();
    echo "La musique a bien été ajouter";
  }
?>