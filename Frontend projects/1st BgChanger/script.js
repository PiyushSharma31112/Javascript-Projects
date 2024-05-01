// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')


// buttons.forEach( (box) => {

//     console.log(box)
//     box.addEventListener ( 'click' , (box) => {

//         if (box.target.id === "grey") {
            
//             body.style.backgroundColor = box.target.id
//         }
//         if (box.target.id === "white") {
            
//             body.style.backgroundColor = box.target.id
//             body.style.color = "black"
//         }
//         if (box.target.id === "yellow") {
            
//             body.style.backgroundColor = box.target.id
//             body.style.color = "black"
//         }
//         if (box.target.id === "blue") {
            
//             body.style.backgroundColor = box.target.id
//         }
//         if (box.target.id === "skyBlue") {
            
//             body.style.backgroundColor = box.target.id
//             body.style.color = "black"
            
//         }
        
//     })
// });




// Practice



const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach( (box) => {

    box.addEventListener("click" , (box) => {

        if (box.target.id === "grey") {
      
            body.style.backgroundColor = box.target.id;
      
        }  if (box.target.id === "white") {
      
            body.style.backgroundColor = box.target.id;
            body.style.color = "black";
      
        }  if (box.target.id === "yellow") {
      
            body.style.backgroundColor = box.target.id;
      
        }  if (box.target.id === "blue") {
      
            body.style.backgroundColor = box.target.id;
      
        }  if (box.target.id === "skyBlue") {
      
            body.style.backgroundColor = box.target.id;
            body.style.color = "black";
      
        }


    })
})
