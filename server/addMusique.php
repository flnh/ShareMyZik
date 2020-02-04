<?php
  require('./bdd.php');
  $req = $bdd->prepare('INSERT INTO musiques(ID, Titre, Artiste, Duree, UrlMusique, UrlImage) VALUES(:ID, :Titre, :Artiste, :Duree, :UrlMusique, UrlImage)');
  $req->execute(array(
    'ID' => htmlspecialchars($_POST['ID']),
    'Titre' => htmlspecialchars($_POST['Titre']),
    'Artiste' => htmlspecialchars($_POST['Artiste']),
    'Duree' => htmlspecialchars($_POST['Duree']),
    'UrlMusique' => $_POST['UrlMusique'],
    'UrlImage' => $_POST['UrlImage']
  ));
?>