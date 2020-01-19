var colors = generateRandomColors(6);

var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square")
var pickedColor = randomColorDisplay();
var messageDisplay =document.querySelector("#message")
var h1 =document.querySelector("h1")
var buttonreset = document.querySelector("button")

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++)
{
	//adding initial colors to squares
	squares[i].style.backgroundColor = colors[i]; 

	//adding click listeners to squares
	squares[i].addEventListener("click" , function(){
		var clickedColor = this.style.backgroundColor; 
		
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}

function changeColor(color){
	//loop through sqaures and then change colors
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}


function randomColorDisplay()
{
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
}

function generateRandomColors(num)
{ 
	//make an array
	var arr = []
	//use num and get numbers
	for(var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//for r
	var r = Math.floor(Math.random() * 256);
	//for g
	var g = Math.floor(Math.random() * 256);
	//for b
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}
