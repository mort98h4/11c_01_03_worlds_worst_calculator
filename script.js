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

    let value1 = firstNumber.value;
    let value2 = secondNumber.value;
    console.log(Number(value1) + Number(value2));

    firstNumber.value = Number(value1) + Number(value2);
    secondNumber.value = "";
}

function clearResults() {
    console.log("clearResults");
}