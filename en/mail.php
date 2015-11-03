<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$email = $_POST['email'];
$check = $_POST['check'];
$email_admin = 'info@herculestrophy.lt';

$from =  'Hercules Trophy';
$subject= 'Registration'; 
$msg = "<b>First name</b>: $name<br />
<b>Last Name</b>: $surname<br />
<b>Phone number</b>: $phone<br />
<b>Company name</b>: $company<br />
<b>Email</b>: $email<br />
<b>I want to recieve news  and updates to my Email</b>: $check<br />";
$mail = $email_admin; 
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-transfer-encoding: 8bit\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $from\r\n";
$headers .='From: '.$email;
$headers .=' Reply to:'.$mail;
	 
$mail_sent= mail($mail,$subject,$msg,$headers);
?>