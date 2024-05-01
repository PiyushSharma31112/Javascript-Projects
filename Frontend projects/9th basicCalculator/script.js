const result = document.getElementById("result");
const button = document.getElementById("button");
const main = document.getElementById("main"); 







main.addEventListener("submit", (e) => {

    e.preventDefault();

    const first = parseInt(document.getElementById("first").value)
    const second = parseInt(document.getElementById("second").value)
    const operator = document.getElementById("operator").value;


    
    if (first === " " && isNaN(first) && first > 0 ) {
        
        result.innerHTML = `<h2> Please enter a number</h2>`
   
    } if (second === " " && isNaN(second) && second > 0) {
    
        result.innerHTML =  `<h2> Please enter a number</h2>`
    
    } else  {

        const add = first + second;
        const sub = first - second;
        const mult = first * second;
        const divide = first / second;
        const module = first % second;

                if (operator === "+") {

                    console.log(add);
                    result.innerHTML =  `<h2>${(add).toFixed(2)}</h2>`;

                 } if (operator === "-") {

                    console.log(sub);
                    result.innerHTML =  `<h2>${(sub).toFixed(2)}</h2>`;
                    
                 } if (operator === "*") {

                    console.log(mult);
                    result.innerHTML =  `<h2>${(mult).toFixed(2)}</h2>`;
                    
                 } if (operator === "/") {

                    console.log(divide);
                    result.innerHTML =  `<h2>${(divide).toFixed(2)}</h2>`;
                    
                 }
    }
})
