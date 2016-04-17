<?php

$code = $_POST['code'];
$email = $_POST['email'];
$codeconfirm = $_GET['codeconfirm'];
$emailconfirm = $_GET['emailconfirm'];

include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/email.php';
include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/db-operations.php';

if(isset($codeconfirm) && isset($emailconfirm)){

	$db->exec('DELETE FROM codes WHERE code = "'.htmlspecialchars($codeconfirm).'"');

	if(!in_array($emailconfirm, $emails)){

		$db->exec('INSERT INTO emails(email) VALUES("'.htmlspecialchars($emailconfirm).'")');

		include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/serve.php';
		serveFile();

	}else{

		include $_SERVER["DOCUMENT_ROOT"] . '/ep/templates/already-sent.html';

	}

}else{

	if(isset($code) && isset($email)){

		// Vérification du code
		if(in_array($code, $codes)){

			$db->exec('UPDATE codes SET email = "'.htmlspecialchars($email).'" WHERE code = "'.htmlspecialchars($code).'"');

			$expediteur = 'contact@just-band.com';
			$domaine = 'Just.';
			$subject = 'Just. | Lien de téléchargement de l\'EP';

			sendEmail($email, $expediteur, $domaine, $subject, $code);

			$db->exec('UPDATE codes SET sent = 1 WHERE code = "'.htmlspecialchars($code).'"');

			include $_SERVER["DOCUMENT_ROOT"] . '/ep/templates/success.php';

		}else{

			include $_SERVER["DOCUMENT_ROOT"] . '/ep/templates/error.php';

		}

	}else{

		include $_SERVER["DOCUMENT_ROOT"] . '/ep/templates/downloadform.html';

	}
}	



?>