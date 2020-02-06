<?php
  var_dump($_POST);
  require('./bdd.php');
  $req = $bdd->prepare('INSERT INTO musiques(ID, Titre, Artiste, Duree, Genre, UrlMusique, UrlImage) VALUES(NULL, :Titre, :Artiste, :Duree, :Genre, :UrlMusique, :UrlImage)');
  $req->execute(array(
    'Titre' => htmlspecialchars($_POST['Titre']),
    'Artiste' => htmlspecialchars($_POST['Artiste']),
    'Duree' => htmlspecialchars($_POST['Duree']),
    'Genre' => htmlspecialchars($_POST['Genre']),
    'UrlMusique' => $_POST['UrlMusique'],
    'UrlImage' => $_POST['UrlImage']
  ));
  $req->closeCursor();
  echo "Le jeu a été ajouter";
?>