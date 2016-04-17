<?php 

$nom = $_POST['nom'];
$quality = $_POST['quality'];
$favorite = $_POST['favorite'];
$rock = $_POST['rock'];
$comment = $_POST['comment'];

include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/db-operations.php';
include $_SERVER["DOCUMENT_ROOT"] . '/ep/sondage/controllers/email.php';

if(isset($quality) && isset($favorite) && isset($rock) && isset($nom)){

	$nom = htmlspecialchars($nom);
	$quality = htmlspecialchars($quality);
	$favorite = htmlspecialchars($favorite);
	$rock = htmlspecialchars($rock);
	$comment = htmlspecialchars($comment);


	$expediteur = 'contact@just-band.com';
	$domaine = 'Just.';
	$subject = 'Just. | Un avis vient d\'être laissé sur votre EP.';

	if(isset($comment)){

		$db->exec(
			'INSERT INTO sondage(
				nom,
				quality, 
				favorite, 
				rock, 
				comment) 
			VALUES( 
				"'.$nom.'",
				"'.$quality.'", 
				"'.$favorite.'", 
				"'.$rock.'", 
				"'.$comment.'"
				)'
		);


		sendEmail('contact@just-band.com', $expediteur, $domaine, $subject, $nom, $quality, $favorite, $rock, $comment);

		include $_SERVER["DOCUMENT_ROOT"] . '/ep/sondage/templates/thanks.html';

	}else{

		$comment = 'N\'a pas laissé de commentaire';

		$db->exec(
			'INSERT INTO sondage(
				nom,
				quality, 
				favorite, 
				rock, 
				comment) 
			VALUES(
				"'.$nom.'",
				"'.$quality.'", 
				"'.$favorite.'", 
				"'.$rock.'", 
				"'.$comment.'"
				)'
		);


		include $_SERVER["DOCUMENT_ROOT"] . '/ep/sondage/templates/thanks.html';

	}

}else{

	include $_SERVER["DOCUMENT_ROOT"] . '/ep/sondage/templates/form.html';

}


 ?>