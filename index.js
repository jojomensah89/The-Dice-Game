///// Image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImage = "dice" + randomNumber1 + ".png"; // dice1-dice6.png

var randomImageSrc = "images/" + randomImage; // images/dice1-dice6.png

document.getElementsByClassName("img1")[0].setAttribute("src",randomImageSrc);
  /// Image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImage = "dice" + randomNumber2 + ".png"; // dice1-dice6.png

var randomImageSrc2 = "images/" + randomImage; // images/dice1-dice6.png

document.getElementsByClassName("img2")[0].setAttribute("src",randomImageSrc2);

//// h1
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
 document.querySelector("h1").innerHTML = "Player 2 Wins";

}
else{
 document.querySelector("h1").innerHTML = "Draw";
}
