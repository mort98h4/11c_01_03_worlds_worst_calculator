"use strict";

// We need this in multiple functions
const results = document.querySelector("#results");

// Setting up the world's worst calculator
window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");

    // There is already a couple of li tags, we need to get rid of those
    results.innerHTML = "";

    // We need to make these clickable
    document.querySelector("#calculate").addEventListener("click", calculateResults);
    document.querySelector("#clear").addEventListener("click", () => {
        // We can clear out the results list after calculating ALL the numbers
        results.innerHTML = "";
    });
}

// We clicked on #calculate
function calculateResults() {
    console.log("calculateResults");

    // Read first number
    const firstNumber = document.querySelector("#firstnumber");
    let value1 = firstNumber.value;
    console.log(value1);

    // Read second number 
    const secondNumber = document.querySelector("#secondnumber");
    let value2 = secondNumber.value;
    console.log(value2);

    // Read operator
    const operator = document.querySelector("#operator");
    let selectedOperator = operator.value;
    console.log(selectedOperator);

    // Now we're actually gonna do the calculation
    let result;
    if (selectedOperator === "add") {
        result = Number(value1) + Number(value2);
        console.log(result);
    } else if (selectedOperator === "sub") {
        result = Number(value1) - Number(value2);
        console.log(result);
    } else if (selectedOperator === "mul") {
        result = Number(value1) * Number(value2);
        console.log(result);
    } else if (selectedOperator === "div") {
        result = Number(value1) / Number(value2);
        console.log(result);
    }

    // Do we have to round the result?
    const doRound = document.querySelector("#doround");
    console.log(doRound.checked); 

    // And if do have to round, how many decimals do we need? 
    const decimals = document.querySelector("#decimals");
    let selectedDecimals = decimals.value;
    console.log(selectedDecimals);

    // Update the input fields with the result
    if (doRound.checked === true) {
        firstNumber.value = result.toFixed(selectedDecimals);
        secondNumber.value = "";
    } else {
        firstNumber.value = result;
        secondNumber.value = "";
    }

    // Append the result to the end of the results list
    let resultList = document.createElement("li");
    resultList.textContent = firstNumber.value;
    results.appendChild(resultList);

    // We're just gonna add some automatic scroll
    const scroll  = results.scrollHeight;
    results.scrollBy(0, scroll);
}