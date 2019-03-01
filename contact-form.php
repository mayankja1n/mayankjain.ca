<?php  

if (isset($_POST['submit'])) {

	$name =  $_POST['full_name'];
	$email =  $_POST['email_address'];
	$phone =  $_POST['ph_num'];
	$subject =  $_POST['subject'];
	$message =  $_POST['message'];

	$mailTo = "mayankj2112@gmail.com";
	$headers = "From: mayankj2112@gmail.com";
	$txt = "Name: ".$name."\n\nEmail: ".$email."\n\nPhone: ".$phone."\n\nMessage: \n".$message;




	mail($mailTo, $subject, $txt, $headers);
	
	header("Location: index.html#contact");
}

?>