//business logic
function Player() {
  this.currentScore=0;
  this.totalScore=0;

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
  this.totalScore += this.currentScore;
  this.currentScore=0;

}

var rolledNumber =function(){
  return Math.floor((Math.random() * (6)) + 1);
};


// user interface logic
$(document).ready(function() {
  var player1=new Player();
  var player2=new Player();
  $(".btn-roll-player1").click(function() {

      if (player1.totalScore >= 100){
        alert("You Win");
      }
      else{
        player1.roll();
      }
      $("#currentScore-player1").text(player1.currentScore);

});

  $(".btn-roll-player2").click(function() {
    if (player2.totalScore >= 100){
      alert("You Win");
    }
    else{
      player2.roll();
    }
      $("#currentScore-player2").text(player2.currentScore);
  });



  $(".btn-hold-player1").click(function() {
    player1.hold();
  $("#totalScore-player1").text(player1.totalScore);
  $("#currentScore-player1").text(player1.currentScore);

});

  $(".btn-hold-player2").click(function() {
    player2.hold();
  $("#totalScore-player2").text(player2.totalScore);
$("#currentScore-player2").text(player2.currentScore);




});
//

});
