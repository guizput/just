<?php
// Include MobileDetect and instantiate the class.
require_once 'php/Mobile_Detect.php';
$detect = new Mobile_Detect;

// Including Youtube Credentials
include('php/credentials.php');

// Any mobile device (phones or tablets).
if ( $detect->isMobile() ) {
	include('templates/mobile.php');
}else if( $detect->isTablet() ){
	include('templates/tablet.php');
}else {
	include('templates/desktop.php');
}

?>