"use strict";

let value1;
let value2;

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");

    document.querySelector("#calculate").addEventListener("click", calculateResults);
    clearButton.addEventListener("click", clearResults);
}

function calculateResults() {
    console.log("calculateResults");
    const firstNumber = document.querySelector("#firstnumber");
    const secondNumber = document.querySelector("#secondnumber");

    value1 = firstNumber.value;
    value2 = secondNumber.value;
    console.log(Number(value1) + Number(value2));

}

function clearResults() {
    console.log("clearResults");
}