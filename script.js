"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");


    document.querySelector("#calculate").addEventListener("click", calculateResults);
    document.querySelector("#clear").addEventListener("click", clearResults);
}

function calculateResults() {
    console.log("calculateResults");
}

function clearResults() {
    console.log("clearResults");
}