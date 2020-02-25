<?php
  if (isset($_POST['Titre']) && isset($_POST['Artiste']) && isset($_POST['Duree']) && isset($_POST['Categorie']) && isset($_POST['UrlMusique']) && isset($_POST['UrlImage']) && count($_POST['Titre']) <= 1000 && count($_POST['Artiste']) <= 1000 && count($_POST['Duree']) && count($_POST['Categorie']) <= 100 && count($_POST['UrlMusique']) <= 1000 && filter_var($_POST['UrlMusique'], FILTER_VALIDATE_URL) && count($_POST['UrlImage']) <= 1000 && filter_var($_POST['UrlImage'], FILTER_VALIDATE_URL)) {
    require('./bdd.php');


    $req = $bdd->prepare('SELECT ID_Categorie, Categorie FROM categorie');
    $req->execute();
    $listeCategories = $req->fetchAll();
    $req->closeCursor();
    $categorieExistante;
    $sortie = [
      'Titre' => htmlspecialchars($_POST['Titre']),
      'Artiste' => htmlspecialchars($_POST['Artiste']),
      'Duree' => htmlspecialchars($_POST['Duree']),
      'UrlMusique' => htmlspecialchars($_POST['UrlMusique']),
      'UrlImage' => htmlspecialchars($_POST['UrlImage'])
    ];
    $categorie = ucfirst(strtolower($_POST['Categorie']));
    
    foreach ($listeCategories as $value) {
      if (in_array($categorie, $value)) {
        $categorieExistante = [$value['ID_Categorie'] => $value['Categorie']];
      }
    }
    
    if (isset($categorieExistante)) {
      $sortie['Categorie'] = key($categorieExistante);
    } else {
      $req = $bdd->prepare('INSERT INTO categorie(ID, ID_Categorie, Categorie) VALUES(NULL, :ID_Categorie, :Categorie)');
      $req->execute(array(
        'ID_Categorie' => count($listeCategories) + 1,
        'Categorie' => $categorie
      ));
      $req->closeCursor();
      $sortie['Categorie'] = count($listeCategories) + 1;
    }






    $req = $bdd->prepare('INSERT INTO musiques(ID, Titre, Artiste, Duree, Categorie, UrlMusique, UrlImage) VALUES(NULL, :Titre, :Artiste, :Duree, :Categorie, :UrlMusique, :UrlImage)');

    $req->execute($sortie);

    $req->closeCursor();
    echo "La musique a bien été ajouter";
  }
?>