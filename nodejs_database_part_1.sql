-- Adminer 4.8.1 MySQL 11.3.0-MariaDB dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `nodejs_database_part_1`;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `categories` (`id`, `name`) VALUES
(1,	'Food'),
(2,	'Food')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`);

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_customer_id_fk` (`customer_id`),
  CONSTRAINT `comments_customer_id_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `comments` (`id`, `customer_id`, `title`, `description`) VALUES
(1,	'yuli',	'comment 1',	'sample comment 1'),
(2,	'yuli',	'comment 2',	'sample comment 2'),
(3,	'yulianto',	'comment 1',	'sample comment 1'),
(4,	'yulianto',	'comment 2',	'sample comment 2'),
(5,	'yuli',	'Insert Comment',	'Description Comment'),
(6,	'Salam',	'Comment 1',	'Description 1'),
(7,	'Salam',	'Comment 2',	'Description 2')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `customer_id` = VALUES(`customer_id`), `title` = VALUES(`title`), `description` = VALUES(`description`);

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customers_email_unique` (`email`),
  UNIQUE KEY `customers_phone_unique` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `customers` (`id`, `name`, `email`, `phone`) VALUES
('1',	'Kwon Yuli',	'kwonyuli@gmail.com',	'08123456789'),
('echo1',	'Echo1',	'echo1lg2@gmail.com',	'0812321123'),
('echo2',	'Echo2',	'echo2@gmail.com',	'0812321123123'),
('kwon',	'Kwon',	'kwon@gmail.com',	'081234567'),
('kwon1',	'Kwon1',	'kwon1@gmail.com',	'0812345671'),
('Salam',	'Salam',	'salam@gmail.com',	'08538439148'),
('yuli',	'Yuli',	'yuli@gmail.com',	'0812345678'),
('yuli1',	'Yuli',	'yuli1@gmail.com',	'08123456781'),
('yulianto',	'yulianto',	'yulianto@gmail.com',	'0855853917'),
('yully',	'yullyanto',	'yully@gmail.com',	'09888677665')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `email` = VALUES(`email`), `phone` = VALUES(`phone`);

DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes` (
  `customer_id` varchar(100) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  PRIMARY KEY (`customer_id`,`product_id`),
  KEY `likes_product_id_fk` (`product_id`),
  CONSTRAINT `likes_customer_id_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `likes_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `likes` (`customer_id`, `product_id`) VALUES
('kwon',	'P0004'),
('kwon1',	'P0009')
ON DUPLICATE KEY UPDATE `customer_id` = VALUES(`customer_id`), `product_id` = VALUES(`product_id`);

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `products` (`id`, `name`, `price`, `stock`, `category`) VALUES
('P0001',	'A',	1000,	100,	'K1'),
('P0002',	'B',	2000,	200,	'K1'),
('P0003',	'C',	3000,	300,	'K1'),
('P0004',	'D',	4000,	400,	'K1'),
('P0005',	'E',	5000,	500,	'K1'),
('P0006',	'A',	1000,	100,	'K2'),
('P0007',	'B',	2000,	200,	'K2'),
('P0008',	'C',	3000,	300,	'K2'),
('P0009',	'D',	4000,	400,	'K2'),
('P0010',	'E',	5000,	500,	'K2')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `price` = VALUES(`price`), `stock` = VALUES(`stock`), `category` = VALUES(`category`);

DROP TABLE IF EXISTS `sample`;
CREATE TABLE `sample` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `sample` (`id`, `name`) VALUES
('1',	'yuli anto')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`);

DROP TABLE IF EXISTS `wallet`;
CREATE TABLE `wallet` (
  `id` varchar(100) NOT NULL,
  `balance` int(11) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wallet_customer_id_unique` (`customer_id`),
  CONSTRAINT `wallet_customer_id_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `wallet` (`id`, `balance`, `customer_id`) VALUES
('echo1',	1000000,	'echo1'),
('yuli',	1000000,	'yuli'),
('yulianto',	250000,	'yulianto')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `balance` = VALUES(`balance`), `customer_id` = VALUES(`customer_id`);

DROP TABLE IF EXISTS `_loves`;
CREATE TABLE `_loves` (
  `A` varchar(100) NOT NULL,
  `B` varchar(100) NOT NULL,
  PRIMARY KEY (`A`,`B`),
  KEY `product_loves_fk` (`B`),
  CONSTRAINT `customer_loves_fk` FOREIGN KEY (`A`) REFERENCES `customers` (`id`),
  CONSTRAINT `product_loves_fk` FOREIGN KEY (`B`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `_loves` (`A`, `B`) VALUES
('kwon',	'P0004'),
('kwon',	'P0009')
ON DUPLICATE KEY UPDATE `A` = VALUES(`A`), `B` = VALUES(`B`);

-- 2023-11-21 05:48:18
