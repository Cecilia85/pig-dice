//business logic
function Player() {
  this.currentScore,
  this.totalScore

}
Player.prototype.roll=function() {
  var randomNumber= rolledNumber();
  alert( randomNumber);
  if (randomNumber === 1){
    this.currentScore = 0;
  }else {
    this.currentScore+=randomNumber;

  }

}

Player.prototype.hold=function() {
  this.currentScore=0;
  this.totalScore += this.currentScore;
}

var rolledNumber =function(){
  return Math.floor((Math.random() * (6)) + 1);
};


// user interface logic
$(document).ready(function() {
  var player1=new Player();
  var player2=new Player();
  $(".btn-roll-player1").click(function() {
      player1.roll();
      $("#currentScore-player1").text(currentScore);

});

  $(".btn-roll-player2").click(function() {
      player2.roll();
      $("#currentScore-player2").text(currentScore);
  });



  $(".btn-hold-player1").click(function() {
    player1.hold();
  $("#totalScore-player1").text(totalScore);
  $("#currentScore-player1").text(currentScore);

});

  $(".btn-hold-player2").click(function() {
    player2.hold();
  $("#totalScore-player2").text(totalScore);
$("#currentScore-player2").text(currentScore);




});
// if (player1.totalScore >= 10){
//   alert("You Win");
// }
// else if (player2.totalScore >= 10){
//   alert("You Win");
// }

});
