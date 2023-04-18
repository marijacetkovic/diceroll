var button = document.querySelector(".roll");
button.addEventListener("click", function() {

var randomNumber1 = Math.floor(Math.random() * 6 +1);
var randomDice1 = "diceimgs/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random() * 6 +1);
var randomDice2 = "diceimgs/dice"+randomNumber2+".png";
var img1 = document.querySelector(".player1 img");
img1.setAttribute("src", randomDice1);
var img2 = document.querySelector(".player2 img");
img2.setAttribute("src", randomDice2);
var text = document.querySelector("h1");
if (randomNumber1>randomNumber2) {
	text.textContent = "player 1 won!";
	text.style.left = "-4%";
}
else if (randomNumber2>randomNumber1){
	text.textContent = "player 2 won!";
	text.style.left = "-5%";

}
else{
	text.textContent = "roll again!";
	text.style.left = "3%";
}

})
