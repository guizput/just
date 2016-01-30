<head>
	<!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="css/animate.css" rel="stylesheet" />
    <!-- Squad theme CSS -->
    <link href="css/style.css" rel="stylesheet">
	<link href="color/default.css" rel="stylesheet">

	<meta charset="utf-8">
</head>

<body>	
	<!-- Google Code for Formulaire Conversion Page -->
			<script type="text/javascript">
				/* <![CDATA[ */
				var google_conversion_id = 942904766;
				var google_conversion_language = "en";
				var google_conversion_format = "3";
				var google_conversion_color = "ffffff";
				var google_conversion_label = "b9QqCLiV7F4QvqvOwQM";
				var google_remarketing_only = false;
				/* ]]> */
			</script>
			<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
			</script>
			<noscript>
				<div style="display:inline;">
				<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/942904766/?label=b9QqCLiV7F4QvqvOwQM&amp;guid=ON&amp;script=0"/>
				</div>
			</noscript>

			<!-- FIN Google code -->
	

	<section id="about" class="home-section text-center">
	    	<div class="wow bounceInDown" data-wow-delay="0.4s">
						<div class="section-heading">
						<h2>Contact</h2>
						<i class="fa fa-2x fa-angle-down"></i>

						</div>
						</div>
			<div id="presentation">
					<div class="avatar"><img src="img/team/4thumb.jpg" alt="" class="img-responsive img-circle" /></div>
					<br/>
						<p>      	<?php

							if (
								isset($_POST['message']) && 
								isset($_POST['email']) && 
								isset($_POST['name'])
								) 
							{
								$message = 'Message :' . "\r\n" . "\r\n" . $_POST['message'];
								$headers = "Email du contact :" . $_POST['email'] . "\r\n" . "\r\n" . "Nom: " . $_POST['name'];

								mail('guillaumeduran2@gmail.com', 'Contact via le site de Just', $message, $headers);
								
								echo 'Votre message a bien été envoyé! <br/> <br/> <a class="btn btn-info" id="retour" href="http://www.just-band.com">Retourner sur le site.</a>';
							
							}
							else{
									echo 'Une erreur est survenue, veuillez remplir le <a class="btn btn-info" href="http://www.just-band.com">formulaire</a> à nouveau';
								}


							?>
						</p>

			</div>
			
		</section>



</body>		