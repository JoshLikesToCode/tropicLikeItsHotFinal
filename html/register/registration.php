<?php	

	session_start();
	header('location:..\login\login.php');	

	$con = mysqli_connect('localhost', 'root', 'root');

	mysqli_select_db($con, 'userregistration');

	$name = $_POST['user'];
	$pass = $_POST['password'];

	/*
	$blowFish_Hash_Format="$2y$10$";
        $salt = "MYNAMEisjoshua12345678";
        $formatting_BlowFish_With_Salt = $blowFish_Hash_Format . $salt;

        $hash = crypt($_POST['password'], $formatting_BlowFish_With_Salt);
	*/

	$s = " select * from usertable where name = '$name'";

	$result = mysqli_query($con, $s);

	$num = mysqli_num_rows($result);

	if($num == 1) {
		echo " username already taken";
	} else {
		$reg = " insert into usertable(name, password) values ('$name', '$pass')";
		mysqli_query($con, $reg);
		echo " Registration succesful";
	}

?>
