var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1  = "dice" +randomNumber1 +".png";
var randomDiceImageSrc1= "images/"+randomDiceImage1;
var srcReplacment1 = document.querySelector(".img1");
srcReplacment1.setAttribute("src", randomDiceImageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomDiceImageSrc2 = "images/"+randomDiceImage2;
var srcReplacment2 = document.querySelector(".img2");
srcReplacment2.setAttribute("src", randomDiceImageSrc2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";

}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}