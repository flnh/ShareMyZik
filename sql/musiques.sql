-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 23 fév. 2020 à 01:13
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sharemyzik`
--

-- --------------------------------------------------------

--
-- Structure de la table `musiques`
--

DROP TABLE IF EXISTS `musiques`;
CREATE TABLE IF NOT EXISTS `musiques` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Titre` varchar(100) NOT NULL,
  `Artiste` varchar(100) NOT NULL,
  `Duree` varchar(100) NOT NULL,
  `Categorie` int(11) NOT NULL,
  `UrlMusique` varchar(1000) NOT NULL,
  `UrlImage` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `musiques`
--

INSERT INTO `musiques` (`ID`, `Titre`, `Artiste`, `Duree`, `Categorie`, `UrlMusique`, `UrlImage`) VALUES
(1, 'Nicolas Chenard Live@AbsolutFreak party (Triptyque,Paris 2006)', 'Nicolas Chenard', '19m15s', 1, 'https://www.youtube.com/watch?v=hUe9eZywBpE', 'https://s1.clubxtrem.net/modules/clubxradio/images/nicolas-chenard.gif'),
(2, 'Keep Ya Head Up', '2Pac', '4m32s', 2, 'https://www.youtube.com/watch?v=WP3_3NkZW-U', 'https://m.media-amazon.com/images/I/81YNJf-6h+L._SS500_.jpg'),
(3, 'Bailando', 'Paradisio', '3m45s', 3, 'https://www.youtube.com/watch?v=xiWtqVtd1Oo', 'https://i.ebayimg.com/images/g/lHcAAOxyJ-FRkvz0/s-l300.jpg'),
(4, 'the fat party', 'Nicolas Chenard', '1m22s', 1, 'https://www.dailymotion.com/video/x9jcvo', 'https://i3.sndcdn.com/avatars-000002218678-rgws18-t500x500.jpg'),
(5, 'Ghetto bird', 'Ice Cube', '3m50s', 2, 'https://www.youtube.com/watch?v=zhsfn9IyiLQ', 'https://images-na.ssl-images-amazon.com/images/I/51hAtxeNEaL._SX425_.jpg'),
(6, 'Ave Maria', 'Jan Terri', '5m07s', 4, 'https://www.youtube.com/watch?v=NX5xIRUcPyI', 'https://i.vimeocdn.com/video/673192243_640.jpg'),
(7, 'The Kingslayer', 'Nightwish', '4m10s', 5, 'https://www.youtube.com/watch?v=Sp8ZTF20py4', 'https://images-na.ssl-images-amazon.com/images/I/51xzzw8pY2L._SX355_.jpg'),
(8, 'Miroir miroir', 'Rohff', '3m41s', 2, 'https://www.youtube.com/watch?v=jJzYPfaLQak', 'https://www.raprnb.com/wp-content/uploads/2018/10/rohff-album-3-1200x683.png'),
(9, 'Faded', 'Alan Walker', '3m32s', 1, 'https://www.youtube.com/watch?v=60ItHLz5WEA', 'https://i.ytimg.com/vi/b3Mm4wHMtjQ/maxresdefault.jpg'),
(10, 'Cummin ', 'GPF', '4m33s', 6, 'https://youtu.be/mWJ2KdG_ZmA', 'https://i1.sndcdn.com/avatars-000697244818-qn4y3h-t500x500.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
