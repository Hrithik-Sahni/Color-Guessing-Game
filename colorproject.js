var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(255, 0, 255)",
"rgb(0, 0, 255)"
]

var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square")
var pickedColor = colors[3];

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++)
{
	//adding initial colors to squares
	squares[i].style.backgroundColor = colors[i]; 
	//adding click listeners to squares
	squares[i].addEventListener("click" , function(){
		var clickedColor = this.style.backgroundColor; 
		
		if(clickedColor === pickedColor)
			alert("Correct")
		else{
			alert("Wrong!!")
		}


	});
}