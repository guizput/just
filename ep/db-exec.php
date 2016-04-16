<?php 

include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/db-operations.php';


$db->exec('DELETE FROM codes WHERE email="guillaumeduran2@gmail.com"');

?>