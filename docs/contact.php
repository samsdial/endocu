<?php 
	$response = array();
	$name = (isset($_POST['name'])) ? filter_var($_POST['name'], FILTER_SANITIZE_STRING) : null ;
	$email = (isset($_POST['email'])) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : null ;
	$phone = (isset($_POST['phone'])) ? filter_var($_POST['phone'], FILTER_SANITIZE_STRING) : null ;
$city = (isset($_POST['city'])) ? filter_var($_POST['city'], FILTER_SANITIZE_STRING) : null ;
	$message = (isset($_POST['message'])) ? filter_var($_POST['message'], FILTER_SANITIZE_STRING) : null ;

if ($name!=null && $email!=null && $phone!=null && $city!=null && $message!=null) {

	$msg = "<p><strong>Un nuevo mensaje ha sido enviado desde CondorBox:</strong></p>
	<p><strong>Nombre: </strong>".$name."</p>
	<p><strong>Teléfono: </strong>".$phone."</p>
	<p><strong>Ciudad: </strong>".$city."</p>
	<p><strong>E-Mail: </strong>".$email."</p>
	<p><strong>Mensaje: </strong>".$message."</p>";
	$title = "Nuevo mensaje de contacto en CondorBox";
	$to = 'ariasgonzalezcamilo@gmail.com';

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'To: '.$to.'' . "\r\n";
	$headers .= 'From: Servicio Al Cliente <no-reply@condorbox.com>' . "\r\n";
	$headers .= 'Content-Type: text/html; charset=UTF-8';
	
	$subject = 'Un nuevo mensaje ha sido enviado desde CondorBox';	

	if(mail( $to, $subject, $msg, $headers ) ) {
		$response = "Pronto nos pondremos en contacto contigo";
	}else{
		$response = "Error : Intente Nuevamente";
	}
}

echo json_encode($response);

?>