//business logic
function Player(score, turn) {
  this.score = score;
  this.turn = turn;
}

var currentScore=0;
var roll= function() {
  return Math.floor((Math.random() * 6) + 1);
}
var hold= function(currentScore) {
  return currentScore;
}
var win= function(currentScore) {
  return currentScore + "You Win";
}


Player.prototype.calculation=function(currentScore){
  return currentScore + this.score;
}







// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
  $("form#movements").show();
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedInitialDeposit = $("input#new-initialdeposit").val();
    var newAccount = new Balance(inputtedName,inputtedInitialDeposit);
    $("ul#balance").append("<li><span class='balance'>" + newAccount.name + " " + newAccount.initialdeposit + "</span></li>")


});
});
      $("form#movements").submit(function(event) {
      event.preventDefault();
      $("form#movements").each(function(){
        var inputtedDeposit = $("input#new-deposit").val();
        var inputtedWithdraw = $("input#new-withdraw").val();
        var finalBalance =new final(inputtedDeposit, inputtedWithdraw);
        $("ul#balance").append("<li><span class='balance'>" + finalBalance.depositwithdraw() + "</span></li>");



});
});
