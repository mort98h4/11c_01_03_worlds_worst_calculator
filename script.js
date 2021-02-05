"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");

    document.querySelector("#calculate").addEventListener("click", calculateResults);
    document.querySelector("#clear").addEventListener("click", clearResults);
}

function calculateResults() {
    console.log("calculateResults");
    const firstNumber = document.querySelector("#firstnumber");
    const secondNumber = document.querySelector("#secondnumber");
    const operator = document.querySelector("#operator");
    let selectedOperator = operator.value;

    console.log(selectedOperator);
    // console.log(typeof(selectedOperator));

    let value1 = firstNumber.value;
    let value2 = secondNumber.value;

    if (selectedOperator === "add") {
        firstNumber.value = Number(value1) + Number(value2);
    } else if (selectedOperator === "sub") {
        firstNumber.value = Number(value1) - Number(value2);
    } else if (selectedOperator === "mul") {
        firstNumber.value = Number(value1) * Number(value2);
    } else if (selectedOperator === "div") {
        firstNumber.value = Number(value1) / Number(value2);
    }
    secondNumber.value = "";
}

function clearResults() {
    console.log("clearResults");
}