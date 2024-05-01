// const start = document.getElementById("start");
// const stop = document.getElementById("stop");

// const randomColor = function () {
    
//     const hex = "0123456789ABCDEF"
//     let color = "#"
    
//     for (let i = 0; i < 6; i++) {
        
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//      return color;
// }

// let startButton;

// const startChangingColor = function () {
    
//     if(!startButton){

//           startButton = setInterval(bgColor,1000);
    
//     }

//     function bgColor() {

//         document.body.style.backgroundColor = randomColor();
//     }
   
// };

// const stopChangingColor = function () {
    
//     clearInterval(startButton);
//     startButton = null;
// }

// start.addEventListener("click",startChangingColor);
// stop.addEventListener("click",stopChangingColor);



// Again Practise



const start =  document.getElementById("start");
const stop =  document.getElementById("stop");
const body = document.querySelector("body");

let startButton;


const randomColor = () => {

    hex = `0123456789ABCDEF`;
    color = `#`;


    for (let i = 0; i < 6; i++) {
        
        color += hex[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

const startChangingColor = () => {

    if (!startButton) {

        startButton = setInterval(bgColor , 1000);
        
    }

    function bgColor() {
        body.style.backgroundColor = randomColor();
    } 
}

const stopChangingColor = () => {

    clearInterval(startButton);
    startButton = null;

}

start.addEventListener("click" , startChangingColor);
stop.addEventListener("click" , stopChangingColor);
