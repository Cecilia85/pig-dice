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
  alert( rolledNumber());
  if (rolledNumber() === 1){
    currentScore = 0;
  }else {
    currentScore += rolledNumber();
  }

}


var hold= function(currentScore) {
  return currentScore += rolledNumber();
}
var win= function(currentScore) {
  if (Score >= 100){
  return currentScore += rolledNumber()+ "You Win";
}
}

Player.prototype.calculation=function(currentScore){
  return currentScore + this.score;
}







// user interface logic
$(document).ready(function() {
  $(".btn-roll").click(function() {
      roll();
    event.preventDefault();

$("ul#results-player1").append("<li><span class='results'>" + currentScore  + "</span></li>");
  });


  $(".btn-hold").click(function() {
    hold();



});
});
