<?php
// Include MobileDetect and instantiate the class.
require_once dirname(__FILE__) . '/php/Mobile_Detect.php';
$detect = new Mobile_Detect;

// Any mobile device (phones or tablets).
// if ( $detect->isMobile() ) {
// 	include('/templates/mobile.html');
// }else if( $detect->isTablet() ){
// 	include('/templates/tablet.html');
// }else {
// 	include('/templates/desktop.html');
// }

?>