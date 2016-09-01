<?php 

$codes = array();
$emails = array();

try
{
	$db = new PDO('mysql:host=guillaumgj91.mysql.db;dbname=guillaumgj91;charset=utf8', 'guillaumgj91', 'Ovdeepxfan91');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
	
$result = $db->query('SELECT * FROM codes');

while($row = $result->fetch()) {
    array_push($codes, $row['code'], $row['email']);
}

$result2 = $db->query('SELECT * FROM emails');

while($row2 = $result2->fetch()) {
    array_push($emails, $row2['email']);
}

?>