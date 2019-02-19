var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected"); 
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares () {
    for(var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
           var clickedColour = this.style.backgroundColor;
           //Compare colour to pickedColour
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
}

function reset() {
    // Generate new random colours
    colours = generateRandomColours(numSquares);
    // Pick new random colour from array
    pickedColour = pickColour();
    // Change colours of squares
    colourDisplay.textContent = pickedColour;

    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++) {

        squares[i].style.display = "block";
        if(colours[i]) {
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }

    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});


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