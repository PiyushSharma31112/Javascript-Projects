const form = document.querySelector('form');

// This usecase will give you a empty

// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)


form.addEventListener("submit", (form) => {

    form.preventDefault();
    

    // "Parse" is use to convert stiring into the number


    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#results")

    if(height === "" || height < 0 || isNaN(height)){

        result.innerHTML = `Please enter a valid height ${height}`
    } else if(weight === "" || weight < 0 || isNaN(weight)){

        result.innerHTML = `Please enter a valid weight ${weight}`
    } else {
        const bmi = (weight / (( height * height) / 10000)).toFixed(2)
    
        // show result

        // result.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6){
            result.innerHTML = `UnderWeight : ${bmi}`
        } else if ( bmi >= 18.6 && bmi <= 24.6) {
            result.innerHTML = `Normal Range : ${bmi}`
        } else {
            result.innerHTML = `Overweight : ${bmi}`
        }
    }
    
})