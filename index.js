var randomNumber1 = Math.floor(Math.random()*6);
randomNumber1 = randomNumber1 + 1;
var randomImgNo = "dice"+randomNumber1+".png";
var randomImg = "images/"+randomImgNo;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImg);

var randomNumber2 =Math.floor(Math.random()*6) + 1;
var randomImg2 ="images/dice" + randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins!!!";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Draw between Player 1 and Player 2!!!";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 wins!!!";
}
