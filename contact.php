<?php 
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$to = 'zrenicaplumb@gmail.com';
	$subject = 'Someone viewed your portfolio site.';
	mail($to, $subject, $message, 'FROM: ' . $email);
}
	
?>