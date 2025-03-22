<?php
	include "service/database.php";

$register_message = "";

	if(isset($_POST['login'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];

		$sql ="SELECT * FROM users WHERE username='$username' AND 
		password='$password'
		";
		$result = $db->query($sql);

		if($result->num_rows > 0) {
			$data = $result->fetch_assoc();
			echo "Selamat Datang -" . $data["username"];
			echo "Akun Ditemukan!";
		}else {
			echo "Akun Tidak Ditemukan!";
		} 

	}
	if(isset($_POST['register'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];

		$sql ="INSERT INTO users (username, password) VALUES 
		('$username', '$password')";

		if($db->query($sql)) {
			$register_message = "Daftar akun anda berhasil, silahkan login";
		}
		else {
			$register_message = "Dafatr akun anda gagal, silahkan coba lagi";
		}
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Koperasi Jasa Multipihak Wirausaha Reka Nusantara</title>
    <link rel="Website Icon" type="png" href="../../Gambar/Icon Wiranusa.png">
	<link rel="stylesheet" href="style.css">
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-5fDPwFbMoj2E4oVojGPBY8M8f/JkS9a/8PCysPoC5YkpBa2UJ1oJFDV07XwDnziDUoH2CfRIzXMsfAYHd8mIgw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
	<!-- <h2>Koperasi Jasa Multipihak Wirausaha Reka Nusantara</h2> -->
	<div class="container" id="container">
		<div class="form-container sign-up-container">
			<form action="index.php" method="POST">
				<h1>Create Account</h1>
				<i><?=$register_message ?></i>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
					<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
					<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your email for registration</span>
				<input type="text" placeholder="Name" />
				<input type="username" placeholder="username" name="username" />
				<input type="password" placeholder="password" name="password" />
				<button type="submit" name="register">Sign Up</button>
			</form>
		</div>
		<div class="form-container sign-in-container">
			<form action="not_available.html" method="POST">
				<h1>Sign in</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
					<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
					<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your account</span>
				<input type="username" placeholder="username" name="username" />
				<input type="password" placeholder="password" name="password" />
				<a href="#">Forgot your password?</a>
				<button type="submit" name="login">Sign In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-left">
					<h1>Welcome Back!</h1>
					<p>To keep connected with us please login with your personal info</p>
					<button class="ghost" id="signIn">Sign In</button>
				</div>
				<div class="overlay-panel overlay-right">
					<h1>Hello, Friend!</h1>
					<p>Enter your personal details and start journey with us</p>
					<button class="ghost" id="signUp">Sign Up</button>
				</div>
			</div>
		</div>
	</div>

	<script src="script.js"></script>
</body>
</html>