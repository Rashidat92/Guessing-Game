// alert("connected");
// create event listener for the click event of my button
document.getElementById("check").addEventListener("click", checkGuesss);

let randomNumber = 0; 
let count = 0;
const maxTries = 3;
let gameover = false;

// call function to start the game

newGame();

function checkGuesss(){
//    alert("connected");
let message = "";  

const userGuess = parseInt(document.getElementById("guess").value);
console.log("user guess is " + userGuess);
console.log("type is " + (typeof(userGuess)));

//    compare randomnumber to userguess
if (randomNumber == userGuess){
    message = ("Correct");
    gameover = true;
    document.getElementById("startButton").disabled = false;
}
else if (randomNumber < userGuess){
    message = ("Too high");
}
else{
    message = ("Too low");
    
    
}

//    increment counter
count++   //same as count = count + 1; or count += 1;

//check if i am out of tries
if(count == maxTries && gameover == false){
    message = ("Sorry, out of tries. The number was " + randomNumber);
    document.getElementById("startButton").disabled = false;
     
}

// console.log(message)
document.getElementById("mgs").textContent = message;
}

document.getElementById("startButton").addEventListener("click", newGame);

function newGame() {
        document.getElementById("startButton").disabled = true;

   randomNumber =  1 + Math.floor (Math.random() *100);
    console.log("RandomNumber is " + randomNumber)
    
    count = 0;
    gameover = false;
    document.getElementById("mgs").textContent = " ";
    document.getElementById("guess").value = " ";

    
}

