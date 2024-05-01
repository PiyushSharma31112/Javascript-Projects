const choices = document.querySelectorAll(".images");
const userScorePara = document.getElementById("user-score");
const comScorePara = document.getElementById("com-score");
const msg = document.getElementById("msg");

let userScore = 0;
let comScore = 0;

const generateComChoice =  () =>  {
    const options = ["rock", "paper", "scissor"]
    const ranIndex = Math.floor(Math.random() * 3)

    return options[ranIndex]
}

const drawGame = () => {
   
    msg.innerText = `Game was draw`
    msg.style.backgroundColor = "rgb(11, 11, 28)"
}

const showWinner = (userWin, userChoice, comChoice) => {

    if(userWin) {

        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You won the Game, ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "green"
       

    } else {
      
        comScore++
        comScorePara.innerText = comScore
        msg.innerText = `You loose the Game, ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "red"

    }
}

const playGame = (userChoice) => {

    const comChoice = generateComChoice()

    if (userChoice === comChoice) {
        
        drawGame()
    
    } else {

        let userWin = true

        if (userChoice === "rock") {
            
            userWin = comChoice === "paper" ? false : true;

        } else if(userChoice === "paper") {

            userWin = comChoice === "scissor" ? false : true; 
        
        } else {

            userWin = comChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, comChoice)
    }

}

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id")
        console.log(userChoice)
        playGame(userChoice)
    })  
})

