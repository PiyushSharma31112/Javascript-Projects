// const clock = document.getElementById('clock');

// setInterval(() => {

//     let time = new Date();

//     // console.log(time.toLocaleTimeString())
    
//     localTime.innerHTML = time.toLocaleTimeString();
// } , 1000);



// Again practice


// const clock = document.getElementById("clock");
// const currTime = document.getElementById("localTime");

// setInterval(() => {

//     let time =  new Date();

//     currTime.innerHTML = `${time.toLocaleTimeString()}`

// }, 1000);



// Again practice


const clock = document.getElementById("clock");
const currTime = document.getElementById("localTime");

setInterval(() => {
    
    let time = new Date();

    currTime.innerHTML = `${time.toLocaleTimeString()}`

}, 1000);