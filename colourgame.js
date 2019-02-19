var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");


colourDisplay.textContent = pickedColour;

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;

    for(var i=0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        }
        else {
           squares[i].style.display = "none" ;
        }
    }
});

hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;

    for(var i=0; i < squares.length; i++){
        
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block" ;
    }    

});

resetButton.addEventListener("click", function(){
    // Generate new colours
    colours = generateRandomColours(numSquares);
    // Pick new random colour from array
    pickedColour = pickColour();
    // Change colours of squares
    colourDisplay.textContent = pickedColour;

    this.textContent = "New Colours";

    for(var i = 0; i < squares.length; i++) {
        //Add initial colours to squares
        squares[i].style.backgroundColor = colours[i];
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

for(var i = 0; i < squares.length; i++) {
    //Add initial colours to squares
    squares[i].style.backgroundColor = colours[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
       var clickedColour = this.style.backgroundColor;

       if (clickedColour === pickedColour) {           
           messageDisplay.textContent = "Correct";
           changeColours(clickedColour);
           h1.style.backgroundColor = clickedColour;
           resetButton.textContent = "Play Again?"
       }
       else {
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again";
       }
    });
}


function changeColours(color) {
    //Loop through all squares
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num){
    //Make array of colours
    var colours = [];

    for(var i = 0; i < num; i++) {
        //Get random colour an doush into array
        colours.push(randomColour());
    }

    return colours;
}

function randomColour(){
    // Pick red, green and blue each colour from 0 - 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}