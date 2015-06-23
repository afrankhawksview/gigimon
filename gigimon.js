$(document).ready(function(){

 var gigi = {
 	name:"Gigi",
 	hp:100,
 	attack:10
 };

 var pikachu = {
 	name:"Pikachu",
 	hp:90,
 	attack:10
 };

 function attack(attacker,defender){

 }

 $('#player1').html("<p>Player 1 "+gigi["name"]+" "+gigi["hp"]+"</p>");
 $('#player2').html("<p>Player 2 "+pikachu["name"]+" "+pikachu["hp"]+"</p>");

 $('.attack').click(function(){
 	$('#log').html("<p>Attack!</p>");
 });

});