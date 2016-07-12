//business logic
function Player(score, turn) {
  this.score = score;
  this.turn = turn;
}

//for player1//
var rolledNumber1 =function(){
  return Math.floor((Math.random() * (6)) + 1);
};

var currentScore1= 0;
var totalScore1= 0;

var roll1= function() {
  var randomNumber1= rolledNumber1();
  alert( randomNumber1);
  if (randomNumber1 === 1){
    currentScore1 = 0;
  }else {
    totalScore= currentScore1 += randomNumber1;
  }

}


//for player 2//
var rolledNumber2 =function(){
  return Math.floor((Math.random() * (6)) + 1);
};

var currentScore2= 0;
var totalScore2= 0;

var roll2= function() {
  var randomNumber2= rolledNumber2();
  alert( randomNumber2);
  if (randomNumber2 === 1){
    currentScore2 = 0;
  }else {
    currentScore2 += randomNumber2;
  }

}



var hold1= function(currentScore1) {
  currentScore1=0;
  totalScore1= (currentScore1 += rolledNumber1());
}
var hold2= function(currentScore2) {
  currentScore2=0;
  totalScore2= currentScore2 += rolledNumber2();
}
// var win= function(currentScore) {
//   if (totalScore >= 100){
//   return currentScore += rolledNumber()+ "You Win";
// }
// }

Player.prototype.calculation=function(currentScore){
  return currentScore + this.score;
}







// user interface logic
$(document).ready(function() {
  $(".btn-roll-player1").click(function() {
      roll1();
    event.preventDefault();

$("ul#currentScore-player1").text(currentScore1);
});

  $(".btn-roll-player2").click(function() {
      roll2();
    event.preventDefault();

  $("ul#currentScore-player2").text(currentScore2);
  });

});

  $(".btn-hold-player1").click(function() {
    hold1();
  $("ul#totalScore-player1").text(totalScore1);
});
  $(".btn-hold-player2").click(function() {
    hold2();
  $("ul#totalScore-player2").text(totalScore2);
});
