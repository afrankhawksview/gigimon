$(document).ready(function(){

 var p1 = {
 	name:"Gigi",
 	hp:100,
 	attack:10
 };

 var p2 = {
 	name:"Pikachu",
 	hp:90,
 	attack:10
 };

 function attack(attacker,defender){
 	defender["hp"] = defender["hp"] - attacker["attack"];
 	return defender["hp"];
 }

 $('#player1').html("<p>Player 1 "+p1["name"]+" "+p1["hp"]+"</p>");
 $('#player2').html("<p>Player 2 "+p2["name"]+" "+p2["hp"]+"</p>");

 $('.p1attack').click(function(){	
 	$('#log').html("<p>Attack!</p>");
 	$('#log').append("<p>"+p1["name"]+" attacked for "+p1["attack"]+" damage!</p>");
 	$('#log').append("<p>"+p2["name"]+" has "+ attack(p1,p2) +" health!</p>");
 });

  $('.p2attack').click(function(){	
 	$('#log').html("<p>Attack!</p>");
 	$('#log').append("<p>"+p2["name"]+" attacked for "+p1["attack"]+" damage!</p>");
 	$('#log').append("<p>"+p1["name"]+" has "+ attack(p2,p1) +" health!</p>");
 });

});