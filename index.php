<html>
<head>
	<title>Gigimon Battle</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="gigimon.js"></script>
	<style>
		#battlefield {
			height:100px;
			background:lightgrey;
		}
		.mon {
			display:inline-block;
			color:red;
		}
		#log {
			height:100px;
		}
		.controlarea {
			clear:both;
		}
	</style>
</head>
<body>
	<div id="battlefield">
		<div class="mon" id="player1">
		</div>
		<div class="mon" id="player2">
		</div>
	</div>
	<div id="log">
		<p>FIGHT!</p>
	</div>
	<div class="controlarea">
		<button class="p1attack">P1 Attack</button>
		<button class="p2attack">P2 Attack</button>
	</div>
</body>
</html>