//
const display = document.getElementById("display");
let history = document.getElementById("history");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    
    try{
        const expression = display.value;
        const result = Function('"use strict";return (' + expression + ')')();
        history.innerText = expression + " =";
        display.value = result;
    } catch (error){
        history.innerText = "";
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
    history.innerText = "";
}