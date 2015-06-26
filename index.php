<html>

<head>

<title>Gigimon Battle</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

<!-- Custom Styling -->
<link rel="stylesheet" href="style.css">



<!-- JS -->

<!-- jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Bootstrap Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<!-- Gigimon -->
<script src="gigimon.js"></script>

</head>

<body>
	<div class="container-fluid">
	<div class="row" id="battlefield">
		<div class="col-xs-6 mon">
			<img src="img/02-gigi.jpg" alt="Gigi" width="100px" height="160px">
			<article id="player1">
			</article>
		</div>
		<div class="col-xs-6 mon">
			<img src="img/01-pikachu.png" alt="Pikachu" width="100px" height="160px">
			<article id="player2">
			</article>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12" id="log">
		<p>FIGHT!</p>
		</div>
	</div>
	<div class="row controlarea">
		<div class="col-xs-6">
		<button class="btn btn-default p1attack">P1 Attack</button>
		</div>
		<div class="col-xs-6">
			<button class="btn btn-default p2attack">P2 Attack</button>
		</div>
	</div>
</div>
</body>
</html>
