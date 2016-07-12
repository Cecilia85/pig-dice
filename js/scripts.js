//business logic
function Player(score, turn) {
  this.score = score;
  this.turn = turn;
}


var rolledNumber =function(){
  return Math.floor((Math.random() * (6)) + 1);
};

var currentScore= 0;


var roll= function() {
  var randomNumber= rolledNumber();
  alert( randomNumber);
  if (randomNumber === 1){
    currentScore = 0;
  }else {
    currentScore += randomNumber;
  }

}


// var hold= function(currentScore) {
//   return currentScore += rolledNumber();
// }
// var win= function(currentScore) {
//   if (Score >= 100){
//   return currentScore += rolledNumber()+ "You Win";
// }
// }

Player.prototype.calculation=function(currentScore){
  return currentScore + this.score;
}







// user interface logic
$(document).ready(function() {
  $(".btn-roll-player1").click(function() {
      roll();
    event.preventDefault();

$("ul#results-player1").text(currentScore);
});

  $(".btn-roll-player2").click(function() {
      roll();
    event.preventDefault();

  $("ul#results-player2").text(currentScore);
  });

});

  // $("btn-hold-player2").click(function() {
  //   hold();
  // $("ul#results-player1").text(currentScore);
