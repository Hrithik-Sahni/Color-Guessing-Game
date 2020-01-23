var numSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonReset = document.querySelector("button");
var modeButtons = document.querySelectorAll(".mode")

init(); //Running the init function

function init() {
	
	setUpModeButtons();
	setUpSquares();	
	reset();

}

function setUpModeButtons(){
	
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy")
			{
				numSquares = 3;
			}
			else
			{
				numSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares(){

	for(var i = 0; i< squares.length; i++){ 
		//adding click listeners to squares
		squares[i].addEventListener("click" , function(){
			var clickedColor = this.style.backgroundColor; 
			//Comparing
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				buttonReset.textContent = "Play Again ?"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset()
{
	//generate all colors
	colors = generateRandomColors(numSquares);
	//pick a random color from array 
	pickedColor = randomPick();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	this.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change the color of the square
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";	
		squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	//change the color of h1
	h1.style.backgroundColor = "steelblue";

}

buttonReset.addEventListener("click" , function(){
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColor(color){
	//loop through sqaures and then change colors
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function randomPick()
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
