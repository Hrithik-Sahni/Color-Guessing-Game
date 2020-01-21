var numSquares = 6;
var colors = generateRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square")
var pickedColor = randomPick();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonReset = document.querySelector("button");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click" , function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = randomPick();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click" , function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = randomPick();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
})

buttonReset.addEventListener("click" , function(){
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
		squares[i].style.backgroundColor = colors[i];
	}
	//change the color of h1
	h1.style.backgroundColor = "steelblue";
});

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
			buttonReset.textContent = "Play Again ?"
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
