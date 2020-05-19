	<?php
	session_start();
	if (!isset($_SESSION['username'])) {
		header('location: index.html');
	}
	?>

	<html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css">
		<title>TropicLikeItsHot.com</title>		
	</head>	
	<body>
		<a class="btn btn-full" href="logout.php">I'm Full!</a>
		<a href="http://localhost/index.php">
		<img class="logo" src="/images/logo.png">
		</a>
		<strong><h2 class = "greet"><center>Welcome <?php echo $_SESSION['username']; ?></h1></strong>
		<header>

			<div class="float-text">
				<h1><center>Say good-bye to junkfood <br> and hello to fresh and healthy!</center></h1>
			<center>
			<a class="btn btn-ghost" href="/products/products.html">Shop</a>
			<a class="btn btn-ghost" href="/FAQ/FAQ.html">FAQ</a>
			</center>
			</div>
		</header>
	</body>
</html>	
