const msgContainer = document.getElementById("msg-container");
const msg = document.getElementById("msg");
const reset = document.getElementById("reset");
const boxes = document.querySelectorAll('.box')
const body = document.querySelector('body') 
const newbutton = document.getElementById('new');

let turnX = true;

const winPatterns = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {

    turnX = true;
    enabelBtns();
    msgContainer.classList.add("hide");
}


boxes.forEach( (box) => {

    box.addEventListener("click" , () => {
        console.log("box was clicked")
        
        if(turnX){
            box.innerHTML = `<h1>X</h1>`;
            turnX = false;
        }  else {
            box.innerHTML = `<h1>O</h1>`;
            turnX = true;
        }
        box.disabled = true;
    

        checkWinners();
    });
    
});

const disabledBtns = () => {

     for (let box of boxes){
        box.disabled = true;
     }
}

const enabelBtns = () => {

    for (let box of boxes){
       box.disabled = false;
       box.innerText = ""
    }
}


const showWinner = (winner) => {

    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtns();
} 


const checkWinners = () => {

    for (let patterns of winPatterns) {
        
        // let p = patterns[0]
        // console.log(patterns[0] , patterns[1] , patterns[2])
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText; 
        let val3 = boxes[patterns[2]].innerText;

        console.log(val1);


        if (val1 != "" && val2 != "" && val3 != "") {
            
            if (val1 === val2 && val2 === val3) {
                // console.log("winner")
                
                showWinner(val1);
               
            } else {
                const drawGame = () => {

                    if(val1 != val2 && vla2 != val3){

                        msg.innerText = `Draw`
                        disabledBtns();
                        msgContainer.classList.remove("hide");    
                    
                    }
                                          
                }   
                drawGame()
            }
        } 
    };
}

newbutton.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);