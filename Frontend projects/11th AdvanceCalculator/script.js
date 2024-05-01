
// const result = document.querySelector(".result");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");
// const zero = document.getElementById("0");
// const add = document.getElementById("+");
// const sub = document.getElementById("-");
// const multiply = document.getElementById("*");
// const divide = document.getElementById("/");
// const module = document.getElementById("%");
// const isEqual = document.getElementById("=");
// const ac = document.getElementById("ac");
// const dot = document.getElementById("dot");

// let value1 = 0;
// let value2 = 0;
// // let value3 = 0;
// let symbol = null;


// function evaluate(symbol, val1, val2) {
//     let result = symbol === "*" ? +val1 * +val2 : symbol === "+" ? +val1 + +val2 : symbol === "-" ? +val1 - +val2 : symbol === "/" ? +val1 / +val2 : +val1 % +val2 ;
//     return result;
// }


// one.addEventListener("click" , () => {

//     result.innerHTML += '1';
// });

// two.addEventListener("click" , () => {

//     result.innerHTML += '2';
// });

// three.addEventListener("click" , () => {

//     result.innerHTML += '3';
// });

// four.addEventListener("click" , () => {

//     result.innerHTML += `4`
// });

// five.addEventListener("click" , () => {

//     result.innerHTML += `5`
// });

// six.addEventListener("click" , () => {

//     result.innerHTML += `6`
// });

// seven.addEventListener("click" , () => {

//     result.innerHTML += `7`
// });

// eight.addEventListener("click" , () => {

//     result.innerHTML += `8`
// });

// nine.addEventListener("click" , () => {

//     result.innerHTML += `9`
// });

// zero.addEventListener("click" , () => {

//     result.innerHTML += `0`
// });

// dot.addEventListener("click" , () => {
    
//     result.innerHTML += '.'
// });

// ac.addEventListener("click" , () => {

//     result.innerHTML = null;
// });

// multiply.addEventListener("click" , () => {
//     value1 = result.innerHTML;
//     symbol = '*';
//     result.innerHTML = null;
// });

// add.addEventListener("click" , () => {
//     value1 = result.innerHTML;
//     symbol = '+';
//     result.innerHTML = null;
// });

// sub.addEventListener("click" , () => {
//     value1 = result.innerHTML;
//     symbol = '-';
//     result.innerHTML = null;
// });

// divide.addEventListener("click" , () => {
//     value1 = result.innerHTML;
//     symbol = '/';
//     result.innerHTML = null;
// });

// module.addEventListener("click" , () => {
//     value1 = result.innerHTML;
//     symbol = '%';
//     result.innerHTML = null;
// });

// isEqual.addEventListener("click" , () => {
//     value2 = result.innerHTML;
//     result.innerHTML = evaluate(symbol, value1, value2)
// });


// Again same thing code

// Numbers

const ac = document.getElementById("ac");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const dot = document.getElementById("dot");

// Operators

const add = document.getElementById("+");
const sub = document.getElementById("-");
const mult = document.getElementById("*");
const div = document.getElementById("/");
const modulo = document.getElementById("%");
const isEqual = document.getElementById("="); 

// Output Area

const result = document.querySelector(".result");

// Processing point

let value1 = 0;
let value2 = 0;
let symbol = null;
 
function evaluate(symbol, val1, val2) { 
    let result = symbol === "+" ? +val1 + +val2 : symbol === "-" ? +val1 - val2 : symbol === "*" ? +val1 * +val2 : symbol === "/" ? +val1 / +val2 : +val1 % +val2; 
    return result;
}

// Click Events

ac.addEventListener("click" , () => {

    result.innerHTML = null; 
});

one.addEventListener("click" , () => {

    result.innerHTML += `1`; 
});

two.addEventListener("click" , () => {

    result.innerHTML += `2`; 
});

three.addEventListener("click" , () => {

    result.innerHTML += `3`; 
});

four.addEventListener("click" , () => {

    result.innerHTML += `4`; 
});

five.addEventListener("click" , () => {

    result.innerHTML += `5`; 
});

six.addEventListener("click" , () => {

    result.innerHTML += `6`; 
});

seven.addEventListener("click" , () => {

    result.innerHTML += `7`; 
});

eight.addEventListener("click" , () => {

    result.innerHTML += `8`; 
});

nine.addEventListener("click" , () => {

    result.innerHTML += `9`; 
});

zero.addEventListener("click" , () => {

    result.innerHTML += `0`; 
});

dot.addEventListener("click" , () => {

    result.innerHTML += `.`; 
});

add.addEventListener("click" , () => {

    value1 = result.innerHTML;
    symbol = "+";
    result.innerHTML = null; 
});

sub.addEventListener("click" , () => {

    value1 = result.innerHTML;
    symbol = "-";
    result.innerHTML = null;
});

mult.addEventListener("click" , () => {

    value1 = result.innerHTML;
    symbol = "*";
    result.innerHTML = null;
});

div.addEventListener("click" , () => {

    value1 = result.innerHTML;
    symbol = "/";
    result.innerHTML = null; 
});

modulo.addEventListener("click" , () => {

    value1 = result.innerHTML;
    symbol = "%" ;
    result.innerHTML = null; 
});

isEqual.addEventListener("click" , () => {

    value2 = result.innerHTML
    result.innerHTML = evaluate(symbol, value1, value2);    
});