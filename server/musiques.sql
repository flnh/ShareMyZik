-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 04 fév. 2020 à 09:55
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
  `Titre` varchar(1000) NOT NULL,
  `Artiste` varchar(1000) NOT NULL,
  `Duree` varchar(1000) NOT NULL,
  `Album` varchar(1000) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `UrlMusique` varchar(1000) NOT NULL,
  `UrlImage` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `musiques`
--

INSERT INTO `musiques` (`ID`, `Titre`, `Artiste`, `Duree`, `Album`, `Genre`, `UrlMusique`, `UrlImage`) VALUES
(1, 'Nicolas Chenard Live@AbsolutFreak party (Triptyque,Paris 2006)', 'Nicolas Chenard', '19m15s', '(LIVE)', 'Electronique', 'https://www.youtube.com/watch?v=hUe9eZywBpE', 'http://yt3.ggpht.com/a/AGF-l7-8WG7MRLq7KfocDgK7WTulxB7qaJ7jBcdR6g=s288-c-k-c0xffffffff-no-rj-mo'),
(2, 'Keep Ya Head Up', '2Pac', '4m32s', 'Strictly 4 My N.I.G.G.A.Z.', 'Rap', 'https://www.youtube.com/watch?v=WP3_3NkZW-U', 'https://m.media-amazon.com/images/I/81YNJf-6h+L._SS500_.jpg'),
(3, 'Bailando', 'Paradisio', '3m45s', '/', 'EuropDanse', 'https://www.youtube.com/watch?v=xiWtqVtd1Oo', 'https://i.ebayimg.com/images/g/lHcAAOxyJ-FRkvz0/s-l300.jpg'),
(4, 'the fat party', 'Nicolas Chenard', '1m22s', '(Live)', 'Electronique', 'https://www.dailymotion.com/video/x9jcvo', 'http://yt3.ggpht.com/a/AGF-l7-8WG7MRLq7KfocDgK7WTulxB7qaJ7jBcdR6g=s288-c-k-c0xffffffff-no-rj-mo'),
(5, 'Ghetto bird', 'Ice Cube', '3m50s', 'Lethal Injection', 'Rap', 'https://www.youtube.com/watch?v=zhsfn9IyiLQ', 'https://images-na.ssl-images-amazon.com/images/I/51hAtxeNEaL._SX425_.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
