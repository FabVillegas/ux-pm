<?php

require 'class.phpmailer.php';

$mail = new PHPMailer;
/*
$body             = file_get_contents('contents.html');
$body             = eregi_replace("[\]",'',$body);
*/

$mail->setFrom( 'f.villegas93@gmail.com', 'Fabritzio Villegas' );
$address = "fabritzio.villegas@usaria.mx";
$mail->addAddress( $address, "Fabritzio Villegas" );


$mail->Subject = "PHPMailer Test Subject via mail(), basic";
$body = "Mensaje de prueba";
$mail->Body = $body;
$mail->AltBody = $body;

if( !$mail->send() ){
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
}
else {
	echo 'Message has been sent';
}
?>
