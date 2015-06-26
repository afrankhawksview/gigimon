$(document).ready(function(){

var gigimon = {};

 gigimon.p1 = {
	 name:'Gigi',
	 hp:200,
	 attack:40
 };

 gigimon.p2 = {
	 name:'Pinkachin',
	 hp:90,
	 attack:10
 };


 gigimon.attack = function( attacker , defender ){

	 defender.hp = defender.hp - attacker.attack;

	 $('#log').html('<p>'+ attacker.name + ' Attacks!</p>');
	 $('#log').append('<p>'+attacker.name +' attacked for '+ attacker.attack +' damage!</p>');
	 $('#log').append('<p>'+defender.name +' has '+ defender.hp +' health!</p>');

	 $('#player1').html('<p>Player 1 '+gigimon.p1.name+' '+gigimon.p1.hp+'</p>');
	$('#player2').html('<p>Player 2 '+gigimon.p2.name+' '+gigimon.p2.hp+'</p>');

	 };

 gigimon.win = function( winner , loser ){
		 $('#log').html('<p>' + loser.name + ' has fainted!<br>' +	winner.name + ' wins!</p>');
	 };




 $('#player1').html('<p>Player 1 '+gigimon.p1.name+' '+gigimon.p1.hp+'</p>');
 $('#player2').html('<p>Player 2 '+gigimon.p2.name+' '+gigimon.p2.hp+'</p>');

 $('.p1attack').click(function(){
	 gigimon.attack(gigimon.p1, gigimon.p2);
	 if (gigimon.p2.hp <= 0) {
		 gigimon.win(gigimon.p1, gigimon.p2);
	 }
 });

	$('.p2attack').click(function(){
	 gigimon.attack(gigimon.p2,gigimon.p1);
	 if (gigimon.p1.hp <= 0) {
		 gigimon.win(gigimon.p2, gigimon.p1);
	 }
 });

});
