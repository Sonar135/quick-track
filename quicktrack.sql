-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2025 at 12:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quicktrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `phone` varchar(500) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `store` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `store`) VALUES
(1, 'Victor Efidi okechukwu', 'vefidi135@gmail.com', '08109495127', '$2y$10$.H0zdfcQKxpqAJvUpEz4NONww/gQY9f5Q7UdS/MTSa9Ern5OPfJcy', 'supersavers store'),
(4, 'demo', 'demo@gmail.com', 'demo', '$2y$10$LWLhbJSasjepYvvKtaiWgeQroVR29A9GrT0Q.JtdgWaqz254LhCP2', 'essentials'),
(5, 'gerald simon', 'gerald@gmail.com', '09087463748', '$2y$10$xPSGQNIE8nLPJS7P/ohFwu78wAaV9k.QOlx/cMQLw4yRfmGosUCs6', 'bukka hut');

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` int(11) NOT NULL,
  `branch` varchar(255) NOT NULL,
  `store` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `manager` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `branch`, `store`, `address`, `manager`, `manager_name`) VALUES
(1, 'branch 1', 'supersavers store', 'no 12 keshi rd ', 'dare@gmail.com', 'dare'),
(2, 'branch 2', 'supersavers store', 'Tee-Tops', 'vefidi135@gmail.com', 'Victor Efidi okechukwu'),
(11, 'branch 1', 'essentials', 'teeee&#039;s', 'demo@gmail.com', 'demo'),
(14, 'demo branch', 'supersavers store', '..............', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `store` varchar(255) NOT NULL,
  `branch` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `name`, `supplier`, `category`, `image`, `date`, `quantity`, `store`, `branch`) VALUES
(24, 'mama gold 50kg rice', 'mama gold', 'Food Stuff', '17371052_screenshot202306191511381_jpegd0b49c619ae11ca34ec3d68901955833.jpg', '2028-01-05', 80, 'supersavers store', 'branch 1'),
(25, 'abakaliki rice', 'abakaliki', 'Food Stuff', 'Abakaliki-rice-25kg.jpg', '2030-06-05', 490, 'supersavers store', 'branch 1'),
(26, 'honey rice', 'VLN', 'Food Stuff', 'SIZ1MvyHqKGsGRCbsZvyOMerVQ9I90Uni6HTqk3H.jpeg', '2029-07-11', 490, 'supersavers store', 'branch 1'),
(27, 'abakaliki rice 50kg', 'abakaliki', 'Food Stuff', 'EHP8QGLX0AABj0R.jpg', '2025-01-14', 292, 'supersavers store', 'branch 1'),
(28, 'basmati rice', 'royal', 'Food Stuff', '287707942__26326.jpg', '2040-05-04', 855, 'supersavers store', 'branch 1'),
(29, 'mama choice rice', 'mama choice', 'Food Stuff', '306372578_5500293866731351_1062903385936141703_n.jpg', '2030-05-07', 500, 'supersavers store', 'branch 1'),
(38, 'a car', 'ferex', 'Electronics', 'p90386151_highres-removebg-preview.png', '2026-05-01', 87, 'essentials', 'branch 1');

-- --------------------------------------------------------

--
-- Table structure for table `managers`
--

CREATE TABLE `managers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `store` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `managers`
--

INSERT INTO `managers` (`id`, `name`, `email`, `phone`, `password`, `store`) VALUES
(1, 'Victor Efidi okechukwu', 'vefidi135@gmail.com', '09109293827', '$2y$10$Q5iz4G9B3PjZ9o0Iuq6KBeukG4.nT0X/xujisq2CnD/z2MDSfp2Ca', 'supersavers store'),
(2, 'dare', 'dare@gmail.com', '098765432', '$2y$10$BucgM2Pcrggn/MSJDhY9jONLa0iQOMe2a39pcjgjvwIor5Lyg/KlW', 'supersavers store'),
(12, 'demo', 'demo@gmail.com', '09033948273', '$2y$10$T.pY3ZMh1zKy8SG0qWrThuFGVWhlftCVv.iBAcfqrElD.oJwr9n/a', 'essentials'),
(13, 'simon', 'demo2@gmail.com', '0903333', '$2y$10$efeAPV1/vou/hCoElV9bFeIKUTu8y1bswuB6lKkXatx9zg0/LY25m', 'essentials'),
(14, 'demo 4', 'demo4@gmail.com', '9449494', '$2y$10$x4KvS39EW9bcRFKho0hP4e3GMDFKEVh1.YRyB5hzqEOgVaJhn6nXq', 'essentials'),
(15, 'samuel ajayi', 'samuel@gmail.com', '09058473846', '$2y$10$o1H7SJ1smKxKMPp104Rm0us8jGoLMxTaholDtN21CR2DJ0JcWeQcy', 'supersavers store'),
(16, 'simon', 'simon@gmail.com', '09038472736', '$2y$10$xhHzEAckSM9VMZPYyBOy9.sl/WMBWgfKy.2emJAX6wiOZ1Si3WupC', 'bukka hut');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `quantity` int(255) DEFAULT NULL,
  `current_stock` int(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `store` varchar(255) NOT NULL,
  `branch` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `name`, `supplier`, `quantity`, `current_stock`, `date`, `store`, `branch`) VALUES
(11, 'mama gold 50kg rice', 'mama gold', 1, 445, '2025-01-03', 'supersavers store', 'branch 1'),
(12, 'abakaliki rice', 'abakaliki', 1, 456, '2025-01-03', 'supersavers store', 'branch 1'),
(13, 'abakaliki rice 50kg', 'abakaliki', 5, 292, '2025-01-03', 'supersavers store', 'branch 1'),
(14, 'mama gold 50kg rice', 'mama gold', 32, 477, '2025-01-03', 'supersavers store', 'branch 1'),
(15, 'mama gold 50kg rice', 'mama gold', 6, 483, '2025-01-03', 'supersavers store', 'branch 1'),
(16, 'honey rice', 'VLN', 5, 431, '2025-01-03', 'supersavers store', 'branch 1'),
(17, 'mama gold 50kg rice', 'mama gold', 1, 484, '2025-01-03', 'supersavers store', 'branch 1'),
(18, 'abakaliki rice', 'abakaliki', 7, 463, '2025-01-03', 'supersavers store', 'branch 1'),
(19, 'abakaliki rice', 'abakaliki', 8, 471, '2025-01-03', 'supersavers store', 'branch 1'),
(20, 'abakaliki rice', 'abakaliki', 8, 479, '2025-01-03', 'supersavers store', 'branch 1'),
(21, 'honey rice', 'VLN', 6, 437, '2025-01-03', 'supersavers store', 'branch 1'),
(22, 'abakaliki rice', 'abakaliki', 8, 487, '2025-01-03', 'supersavers store', 'branch 1'),
(23, 'honey rice', 'VLN', 7, 444, '2025-01-03', 'supersavers store', 'branch 1'),
(24, 'honey rice', 'VLN', 3, 447, '2025-01-03', 'supersavers store', 'branch 1'),
(25, 'honey rice', 'VLN', 3, 450, '2025-01-03', 'supersavers store', 'branch 1'),
(26, 'abakaliki rice', 'abakaliki', 6, 493, '2025-01-04', 'supersavers store', 'branch 1'),
(27, 'honey rice', 'VLN', 20, 470, '2025-01-04', 'supersavers store', 'branch 1'),
(28, 'mama gold 50kg rice', 'mama gold', 40, 390, '2025-01-04', 'supersavers store', 'branch 1'),
(29, 'basmati rice', 'royal', 800, 800, '2025-01-04', 'supersavers store', 'branch 1'),
(30, 'honey rice', 'VLN', 100, 520, '2025-01-04', 'supersavers store', 'branch 1'),
(31, 'mama choice rice', 'mama choice', 500, 500, '2025-01-10', '', ''),
(32, 'kjhbv', 'kjhv', 9876, 9876, '2025-01-10', '', ''),
(33, 'demo', 'demo', 34567, 34567, '2025-01-10', '', ''),
(34, 'demo 2', 'demo', 767, 767, '2025-01-10', '', ''),
(35, 'bekka&#039;s shoes', 'bekka&#039;s', 800, 800, '2025-01-10', '', ''),
(36, 'test&#039;s', 'test', 450, 450, '2025-01-10', 'supersavers store', 'branch 1'),
(37, 'blue table', 'furnitaire', 60, 60, '2025-01-11', 'supersavers store', 'branch 1'),
(38, 'jordan sneakers', 'jordan', 89, 89, '2025-01-11', 'supersavers store', 'branch 1'),
(39, 'cool balloons', 'fun', 87, 87, '2025-01-11', 'supersavers store', 'branch 2'),
(40, 'a car', 'ferex', 87, 87, '2025-01-11', 'essentials', 'branch 1'),
(41, 'basmati rice', 'royal', 100, 855, '2025-01-12', 'supersavers store', 'branch 1'),
(42, 'demo', 'demo', 300, 300, '2025-01-12', 'supersavers store', 'branch 1'),
(43, 'demo', 'demo', 50, 50, '2025-01-12', 'supersavers store', 'branch 2');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `quantity` int(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `current_stock` int(255) NOT NULL,
  `store` varchar(255) NOT NULL,
  `branch` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `name`, `customer`, `quantity`, `date`, `current_stock`, `store`, `branch`) VALUES
(1, 'mama gold 50kg rice', 'victoria', 34, '2025-01-04', 450, 'supersavers store', 'branch 1'),
(2, 'mama gold 50kg rice', 'hakimi gloria', 100, '2025-01-04', 350, 'supersavers store', 'branch 1'),
(3, 'mama gold 50kg rice', 'gerald michael', 35, '2025-01-04', 355, 'supersavers store', 'branch 1'),
(4, 'honey rice', 'sope darlington', 40, '2025-01-04', 430, 'supersavers store', 'branch 1'),
(5, 'honey rice', 'charles adamu', 10, '2025-01-04', 420, 'supersavers store', 'branch 1'),
(6, 'basmati rice', 'gerald michael', 45, '2025-01-04', 755, 'supersavers store', 'branch 1'),
(7, 'mama gold 50kg rice', 'steve', 6, '2025-01-07', 349, 'supersavers store', 'branch 1'),
(8, 'honey rice', 'john', 30, '2025-01-12', 490, 'supersavers store', 'branch 1');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `id` int(11) NOT NULL,
  `name` varchar(500) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `manager` varchar(500) DEFAULT NULL,
  `staff_no_limit` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`id`, `name`, `address`, `manager`, `staff_no_limit`) VALUES
(1, 'essentials store', 'no 17 samuel ajayi street', 'wilson@gmail.com', 100),
(2, 'supersavers store', 'no 12 keshi rd ', 'vefidi135@gmail.com', 150);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `managers`
--
ALTER TABLE `managers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
