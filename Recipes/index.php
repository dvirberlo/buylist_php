<!DOCTYPE html>
<html lang="he-IL" encoding="utf-8" >
<head>
<meta charset="utf-8">
<title>Dvir Recipes - Home</title>

<link rel = "shortcut icon" href = "img/Ricon.png" type="image/x-icon"/>
<link rel="stylesheet" type="text/css" href="styles/style.css" />
<link rel="stylesheet" type="text/css" href="styles/w3style.css" />
<link rel="stylesheet" type="text/css" href="styles/min2.css" />
<script type="text/javascript" language = "JavaScript" src="script.js"></script>

<!-- Meta Information -->
<meta name="keywords" content="Dvir Recipes" />
<meta name="copyright" content="copyright © 2017 Dvir Berlowitz . all rights reserved. דביר ברלוביץ © כל הזכויות שמורות" />
<meta name="author" content="Dvir Berlowitz, דביר ברלוביץ" />
<meta name="language" content="Hebrew" />
<meta name="Description" content="Recipes Database"/>
</head>
<body>
<?php
 if (isset($_POST['pass'])) {
	$pas = filter_input(INPUT_POST, 'pass');
	if($pas == "berlowitz" || $pas == "ברלוביץ"){
	    echo '<style type="text/css">
        #a {
            display: none;
        }
        </style>';
		readfile("search.html");
	}
}
?>
<div style="width:50%;" id="a" class="formT1">
<form action="index.php" method ="POST">
<fieldset>
<legend>login:</legend>
<label for="fname">Password: </label><input placeholder="Your password..." id="pass" type="password" name="pass"><br>
<input type="submit" name="submit">
</fieldset>
</form>
</div>
</body>
</html>