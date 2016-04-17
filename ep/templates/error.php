<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Code érroné</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

	<!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

 <style>

    body{
      background-color: #F8F8F8;
    }
  
    #downloadForm{
      margin-top: 15%;
    }

    .btn-info, p{
      font-size: 1.2em;
    }

  </style>

</head>
<body>

	

<div class="container">

	<div class="col-md-4 col-md-offset-4" id="downloadForm">

		<h1>Code erroné</h1>

		<p>Le code - <strong><em><?php echo $code; ?></em></strong> - est incorrect<sup>1</sup> ou a déjà été utilisé<sup>2</sup>.</p>
		<br>

		<a class="btn btn-info" href="../ep/">Retour au formulaire</a>

		<br>
		<br>
		<hr>
		<small><sup>1</sup>Vérifiez votre code et essayez à nouveau.</small>
		<br>
		<small><sup>2</sup>Vous avez probablement déjà téléchargé l'EP. Si ce n'est pas le cas, merci de nous contacter à cet <a href="mailto:contact@just-band.com">adresse</a>.</small>

	</div>	
	
</div>
	
</body>
</html>