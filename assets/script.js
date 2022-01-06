const disp = document.getElementById("disp");

function addChar(element) {
    let char = element.getAttribute('data-value');
    disp.value += char;
}

//clear Screen
function clr(){
    disp.value = "";
}


// %(mod)
function mod(){
    disp.value += " % ";
}

// 1/x, exp. |x|
function oneBy(){
    try{
        const dispValue = "1/"+disp.value;
        disp.value = eval(dispValue);
    }
    catch{
        disp.value = "Error";
    }
}
function exp(){
    try{
        disp.value = Math.exp(disp.value);
    }
    catch{
        disp.value = "Error";
    }
}
function absolute(){
    try{
        disp.value = Math.abs(disp.value);
    }
    catch{
        disp.value = "Error";
    }
}


//x^y, x^2, x^3, 2-/x, 10^x, log, ln
function pow(){
    disp.value += " ^ ";
}
function powTwo(){
    try{
        disp.value = Math.pow(disp.value,2);
    }
    catch{
        disp.value = "Error";
    }
}
function powThree(){
    try{
        disp.value = Math.pow(disp.value,3);
    }
    catch{
        disp.value = "Error";
    }
}
function root(){
    try{
        let dispValue = Math.sqrt(disp.value);        
        disp.value = checkNaN(dispValue);
    }
    catch{
        disp.value = "Error";
    }
}
function tenPow(){
    disp.value = "10" + " ^ ";
}
function log(){
    try{
        let dispValue = Math.log(disp.value);
        disp.value = checkNaN(dispValue);
    }
    catch{
        disp.value = "Error";
    }
}
function logTen(){
    try{
        let dispValue = Math.log10(disp.value);
        disp.value = checkNaN(dispValue);
    }
    catch{
        disp.value = "Error";
    }
}


// PI, e
function pi(){
    disp.value += Math.PI;
}
function e(){
    disp.value += Math.E;
}


// Delete, Dot, signChange
function del(){
    const dispValue = disp.value;
    disp.value = dispValue.substring(0, dispValue.length - 1);
}
function dot(){
    disp.value = disp.value + ".";
}
function plusMinus(){
    disp.value = 0 - disp.value;
}

//Factorial(n!)
function fact(){
    const num = disp.value;
    try{
        function factorial (num){
            if (num==0 || num==1){
            return 1;
            }
            return factorial(num-1)*num;
        }
        disp.value = factorial(num);
    }
    catch{
        disp.value = "Infinity";
    }
}

//Memory (MS, MC, M+, M-, MR)
let memory = [0];
const btnMc = document.getElementsByClassName("btnMc")[0];
const btnMr = document.getElementsByClassName("btnMr")[0];
function checkMemory(value){
    if (isNaN(value[value.length-1])){
        value[value.length-1] = 0;
    }
    btnMc.style.color = "black";
    btnMr.style.color = "black";   
}

function btnGray(){
    btnMc.style.color = "gray";
    btnMr.style.color = "gray";
}
btnGray();

function mc(){
    memory = [0];
    btnGray();
}
function mr(){
    let dispValue = memory.pop();
    if(dispValue == undefined){
        disp.value = "";
        btnGray();
    }
    else{
        disp.value = dispValue
    }
    
}
function mPlus(){
    checkMemory(memory);
    memory[memory.length-1] = memory[memory.length-1] + Number(disp.value);
}
function mMinus(){
    checkMemory(memory);
    memory[memory.length-1] = memory[memory.length-1] - Number(disp.value);
}
function ms(){
    checkMemory(memory);
    memory.push(disp.value);
    disp.value = "";
}

// DEG & RAD button work
let degree;
let btnDeg = document.getElementsByClassName("btnDeg")[0];
let btnRad = document.getElementsByClassName("btnRad")[0];
function deg(){
    degree = true;
    btnDeg.style.color = "black";
    btnRad.style.color = "gray";
}
function rad(){
    degree = false;
    btnDeg.style.color = "gray";
    btnRad.style.color = "black";
}

// trigo function for sine, cose, tan ,cot, cosec, sec
function trigo(value){
    let dispValue = disp.value;
    if(degree){
        console.log(dispValue);
        dispValue = dispValue * (Math.PI/180);
        console.log(dispValue);
    }
    switch(value){
        case 'sine':
            dispValue = Math.sin(dispValue);
            break;
        case 'cos':
            dispValue = Math.cos(dispValue);
            break;
        case 'tan':
            dispValue = Math.tan(dispValue);
            break;
        case 'cot':
            dispValue = 1/Math.tan(dispValue);
            break;
        case 'cosec':
            dispValue = 1/Math.sin(dispValue);
            break;
        case 'sec':
            dispValue = 1/Math.cos(dispValue);
            break;
    }
    if(isNaN(dispValue)){
        disp.value = "Error"
    }
    else{
        disp.value = dispValue;
    }
}

// function for Math fx (random, roundUp, ceiling, flooring)
function func(value){
    let dispValue = disp.value;
    switch(value){
        case 'random':
            dispValue = Math.round(Math.random()*100);
            console.log(dispValue);
            break;
        case 'round':
            dispValue = Math.round(disp.value);
            break;
        case 'ceil':
            dispValue = Math.ceil(disp.value);
            break;
        case 'floor':
            dispValue = Math.floor(disp.value);
            break;
    }
    if(dispValue == 'NaN'){
        disp.value = "Error";
    }
    else{
        disp.value = dispValue;
    }
}

//To check for NaN
function checkNaN(value){
    if (isNaN(value)){
        value = "Error";
        return value;
    }
    return value;
}



// Result(=)
function result(){
    try{
        let dispvalue = disp.value;
        if( (RegExp("[+]")).test(dispvalue) || (RegExp("[-]")).test(dispvalue) || (RegExp("[*]")).test(dispvalue) || (RegExp("[/]")).test(dispvalue) ){
            disp.value = eval(dispvalue);
        }
        else if(dispvalue.includes('^')){
            const a = dispvalue.split(" ^ ");
            disp.value = Math.pow(a[0],a[1]);
        }
        else if(dispvalue.includes('%')){
            const a = dispvalue.split(" % ");
            disp.value = a[0] % a[1];
        }
    }
    catch{
        disp.value = "Error";
    }
}