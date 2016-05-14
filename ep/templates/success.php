<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Email envoyé</title>

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

    	<h1>Email envoyé</h1>

      <p>Un lien de téléchargement vous a été envoyé par email à l'adresse suivante : 
        <br>
        <br>
        <strong><?php echo $email; ?></strong>. 
      </p>  
      <br><br>
      <small>S'il vous plaît, vérifiez que l'email n'a pas atterri dans vos spams</small>

	 </div>	

</div>


</body>
</html>