-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: kokmet
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hallitus`
--

DROP TABLE IF EXISTS `hallitus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hallitus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nimi` varchar(45) NOT NULL,
  `titteli` varchar(45) NOT NULL,
  `puhelinnumero` varchar(45) NOT NULL,
  `sähköposti` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hallitus`
--

LOCK TABLES `hallitus` WRITE;
/*!40000 ALTER TABLE `hallitus` DISABLE KEYS */;
INSERT INTO `hallitus` VALUES (147,'Tomi Junkkila','Puheenjohtaja','045 674 6720','tjunkkila@gmail.com'),(148,'Arto Kykyri','Varapuheenjohtaja','040 733 4576','arto.kykyri80@gmail.com'),(149,'Jaakko Niininen','Sihteeri','044 976 3056','jaakko.niininen@gmail.com'),(150,'Tuomo Hautala','Taloudenhoitaja','040 522 0471','tomme.hautala@gmail.com'),(151,'Arto Kykyri','Huvilan isäntä','040 733 4576','arto.kykyri80@gmail.com'),(152,'Juha Witick','Jäsen','050 586 4238','juhawitick@hotmail.com'),(153,'Jarno Hakkio','Jäsen','050 336 8995','jarno.hakkio@hotmail.com'),(154,'Ville Saukko','Varajäsen','050 342 1214','saukonville@gmail.com'),(155,'Jarkko Salomäki','Varajäsen','050 301 8528','jarkko.salomaki@protonmail.com'),(156,'Anders Åkerblom','Varajäsen','044 521 6508','anno.akerblom@gmail.com'),(157,'Kari-Pekka Karvinen','Varajäsen','046 885 9555','karipekkakarvinen@gmail.com'),(158,'Robert Vikman','Varajäsen','040 722 9052','rvikman@gmail.com');
/*!40000 ALTER TABLE `hallitus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kokoukset`
--

DROP TABLE IF EXISTS `kokoukset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kokoukset` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tyyppi` varchar(50) NOT NULL,
  `aika` datetime NOT NULL,
  `paikka` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kokoukset`
--

LOCK TABLES `kokoukset` WRITE;
/*!40000 ALTER TABLE `kokoukset` DISABLE KEYS */;
INSERT INTO `kokoukset` VALUES (3,'Hallituksen kokous','2025-08-12 18:00:00','Osaston toimisto, Pitkänsillankatu 23'),(16,'Syyskokous','2025-07-17 18:04:00','Osaston toimisto, Pitkänsillankatu 23'),(17,'Hallituksen kokous','2025-10-14 18:00:00','Osaston toimisto, Pitkänsillankatu 23');
/*!40000 ALTER TABLE `kokoukset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tapahtumat`
--

DROP TABLE IF EXISTS `tapahtumat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tapahtumat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `otsikko` varchar(255) NOT NULL,
  `paikka` varchar(255) NOT NULL,
  `aika` date NOT NULL,
  `kuvaus` text NOT NULL,
  `pdf` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tapahtumat`
--

LOCK TABLES `tapahtumat` WRITE;
/*!40000 ALTER TABLE `tapahtumat` DISABLE KEYS */;
INSERT INTO `tapahtumat` VALUES (1,'Teatteritapahtuma','Lappajärvellä','2025-07-16','\"LÄHTISITKÖ\" musiikkikomedia valloittaa Lappajärven kesäteatterin kesällä, ja ammattiosaston kautta pääset nauttimaan huipputeatterista ja mahtavasta seurasta. Esitys alkaa klo 18:00, ja esityksen jälkeen on ruokailu. 50 ensimmäistä ilmoittautujaa pääsee mukaan.','1751191347381-KesÃ¤teatteri -25.pdf'),(2,'Vaellusretki','Iso-Syöte','2025-06-29','Osasto järjestää ruskaretken Iso-Syötteelle. Matkaan lähdetään perjantaina 19.9, ja matkalta palataan sunnuntaina 21.9. Majoitus on Kide-hotellissa tunturin juuressa. Omavastuu jäseneltä 90€, ja avecilta 140€.','1751191586509-Ruskareissu.docx'),(4,'Vaellusretki','Iso-Syöte','2025-09-19','Osasto järjestää ruskaretken Iso-Syötteelle. Matkaan lähdetään perjantaina 19.9, ja matkalta palataan sunnuntaina 21.9. Majoitus on Kide-hotellissa tunturin juuressa. Omavastuu jäseneltä 90€, ja avecilta 140€.','1751343779330-Ruskareissu.docx');
/*!40000 ALTER TABLE `tapahtumat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2b$10$rcQeGyOmhoNQdzbMWg0Waep3b97cEV1uCUVBxhzv9r7bu1DBGgfP.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'kokmet'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-08 16:51:30
