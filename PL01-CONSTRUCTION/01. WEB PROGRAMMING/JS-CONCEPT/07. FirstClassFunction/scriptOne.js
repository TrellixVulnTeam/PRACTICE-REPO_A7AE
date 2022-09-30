console.log('function basic ........');
// funcA();
// funcB();    (ReferenceError: can't access lexical declaration 'funcB' before initialization)
// 1. Function Statement | Function Declaration 
// -- function statement and declaration - has the hosting facilities
function funcA() {
    console.log('called - funcA');
}
// 2. Anonymous Function | Function Expression
// -- function expression - has not the hosting facilities
// -- a Function without a name
let funcB = function () {
    console.log('called - funcB');
}

// 5. Named Function Expression
let funcC = function Func() {
    if (arguments[0] != null)
        console.log('called - funcC');
    else {
        console.log('called - Func');
        // Func();         // InternalError: too much recursion
    }
}

funcC(1);
funcC();
// Func();     // ReferenceError: Func is not defined

// 7. First Class Function 
// -- when a function (argument | return statement) is a function, is called  
// -- first class function | first class citizen 
function funcD(para) {
    console.log(para());
}

function funcX() {
    return 'first class function - as argument';
}

function funcE() {
    return function () {
        console.log('first class function (Anonymous) - as return statement');
    }
}

function funcF() {
    return function funcX() {
        console.log('first class function (Named) - as return statement');
    }
}

funcD(funcX);
funcE();
funcF();
// 8. Arrow Function