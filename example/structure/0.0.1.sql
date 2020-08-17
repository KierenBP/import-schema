CREATE TABLE `crew` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `companyid` int unsigned NOT NULL,
  `name` varchar(300) NOT NULL,
  `createdon` datetime DEFAULT CURRENT_TIMESTAMP,
  `location` varchar(80) DEFAULT '',
  `colour` varchar(6) DEFAULT NULL,
  `hauler` bit(1) NOT NULL DEFAULT b'0',
  `nocharge` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  KEY `companyid` (`companyid`)
);