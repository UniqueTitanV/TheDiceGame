// Creates a variable. Rounds of number. creates number between 0 and 0.999999999 Code always counts from 0
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Lager et random tall mellom 1 til 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //presetter at alle bildene heter dice til å starte med og slutter på .png samt at de har et tall i midten
var randomImageSource = "dices/" + randomDiceImage; //Linker til hvor bildene ligger
var image1 = document.querySelectorAll("img")[0]; //
image1.setAttribute ("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "dices/dice" + randomNumber2 + ".png";
// This selects the second img tag it can find "[1]"
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Player 1 wins because his number is greater
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
// Player 2 wins because his number is greater
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
// If they are alike then this is said
else{
  document.querySelector("h1").innerHTML = "Draw. Play again!";
}

console.log(randomNumber1, randomNumber2)