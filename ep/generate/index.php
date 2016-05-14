<?php 

$generate = $_POST['generate'];

if(isset($generate)){

	$code = uniqid();

	include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/db-operations.php';

	$db->exec('INSERT INTO codes(code) VALUES("'.($code).'")');

	include $_SERVER["DOCUMENT_ROOT"] . '/ep/generate/templates/email-generate.php';

}else{

	include $_SERVER["DOCUMENT_ROOT"] . '/ep/generate/templates/form.html';

}





?>