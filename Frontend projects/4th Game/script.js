
let randomNumber = parseInt(Math.random() * 100 + 1);

console.log(randomNumber)

const submit = document.getElementById("subt")
const userInput = document.getElementById("guessFeild");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");


let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener( 'click',function (a) {
        a.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert(`Please enter a valid number`) 
    } else if(guess < 1){
        alert (`Please enter a value from 1 and above`)
    } else if(guess > 100){
        alert (`Please enter a number below the 100`)
    } else {
        prevGuess.push(guess)
        if (numGuess === 10 ) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    
    if (guess === randomNumber) {

        displayMessage(`You guessed it right`)
        endGame();

    } else if (guess < randomNumber ){

        displayMessage(`Number is TOO low`);

    } else if(guess > randomNumber){

        displayMessage(`Number is TOO high`);
    }
} 

function displayGuess (guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess} , `
    numGuess++ 
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<button id = "newGame">Start new game</button>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
} 

function newGame() {
   
    const newGameButton = document.getElementById("newGame");

    newGameButton.addEventListener('click' , (a) => {
    randomNumber = parseInt(Math.random() * 100 +1)
    prevGuess = []
    numGuess = 1
    remaining.innerHTML = `${11 - numGuess}`
    guessSlot.innerHTML = ""
    userInput.removeAttribute("disabled")
    startOver.appendChild(p);
    playGame = true
 })
}




// Again practise

// let randomNumber = parseInt( Math.random() * 100 + 1);

// console.log(randomNumber);



// function endGame () {

//     userInput.value = "";
//     userInput.setAttribute("disabled" , "");
//     p.classList.add("button");
//     p.innerHTML = `<button id = "newButton">new Game</button>`
//     startOver.appendChild("p");
//     playGame = false;
//     newGame();
// }

// function newGame () {

//     const button = document.getElementById("newButton");
    
//     button.addEventListener("click" , () => {

//         randomNumber = parseInt(Math.random() * 100 + 1);
//         playGame = true;
//         prevGuess = [];
//         numGuess = 1;
//         guessSlot.innerHTML = "";
//         remaining.innerHTML = `${11 - numGuess}`;
//         startOver.removeAttribute("disabled");
//         startOver.appendChild("p");
//     })
// }