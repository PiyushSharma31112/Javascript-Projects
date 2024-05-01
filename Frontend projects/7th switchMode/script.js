// const button = document.getElementById("button");
// const body = document.querySelector("body");

// let bgColor = "light"

// button.addEventListener("click" ,  () => {

//     if (bgColor === "light") {

//        bgColor = "black"
//        body.classList.add("black")  
//        body.classList.remove("white")
    
//     } else {
        
//         bgColor = "light"
//         body.classList.add("white") 
//         body.classList.remove("black")
//     }
// })

// console.log(bgColor)


// Practise

const button = document.getElementById("button");
const body = document.querySelector("body");

let bgColor = "black";

button.addEventListener("click" , () => {

if (bgColor === "light") {
    
    bgColor = "black"
    body.classList.add("black");
    body.classList.remove("white")

} else {

    bgColor = "light"
    body.classList.add("white");
    body.classList.remove("black");
}


})