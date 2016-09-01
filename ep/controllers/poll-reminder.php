<?php 

include $_SERVER["DOCUMENT_ROOT"] . '/ep/controllers/email-poll-reminder.php';


$emails = array();

try
{
	$db = new PDO('mysql:host=guillaumgj91.mysql.db;dbname=guillaumgj91;charset=utf8', 'guillaumgj91', 'Ovdeepxfan91');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}



$result = $db->query('SELECT * FROM emails');

while($row = $result->fetch()) {

	$time = $row['time'];
	$week = (7 * 24 * 60 * 60);
	$actual = $row['time'] + $week;
	$diff = $actual - $time;

	if($diff >= $week && !empty($row['email']) && $row['sent'] == 0){

		array_push($emails, $row['email']);

		$db->exec('UPDATE emails SET sent = 1 WHERE email = "'.$row['email'].'"');

	}
}



$expediteur = 'contact@just-band.com';
$domaine = 'Just.';
$subject = 'Just. | Donnez-nous votre avis.';

foreach ($emails as $email) {

	sendEmailPollReminder($email, $expediteur, $domaine, $subject);

	echo 'Sent to :'.$email;

}

$t = time();

echo 'Time = '.$t -= ($week +1);


?>