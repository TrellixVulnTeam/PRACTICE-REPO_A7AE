console.log('first class function .......');

// 1. function declaration | statement 
function FuncA() {
    console.log('FuncA .......');
}

// 2. function expression | anonymous function 
let FuncB = function () {
    console.log('FuncB ........');
}

// 3. function expression | named function 
let FuncC = function funcX() {
    console.log('FuncC ........');
}

FuncA();
FuncB();
FuncC();

// 4. first class function ----------------------------------------------------
// -- function can act as a value of (array | object | argument | return type)
// -- is a first class function

// -- function definition as an array member
let arrayOne = [11, true, 'string', function () {
    console.log('Anonymous Function ....');
}];

let arrayTwo = [22, false, function funcY () { return 22.11; }];

arrayOne[3]();
console.log(arrayTwo[2]());

let objectOne = {
    proOne: 11,
    proTwo: 22,
    method: function () {
        console.log(this.proOne + this.proTwo);
    }
};

// -- function definition as an object member
let objectTwo = {
    proOne: 10,
    proTwo: 20,
    method: function funcZ() {
        return this.proOne + this.proTwo;
    }
};

objectOne.method();
console.log(objectTwo.method());

// -- function definition as a function argument
// -- function definition can't be a function parameter
function funcD(paraOne, paraTwo) {
    if(paraOne <= 10)
        console.log('sum is : ' + (paraOne + paraTwo()));
    else paraTwo();
}

funcD(10, function () {
    return 20;
});

funcD(20, function funcXYZ() {
    console.log('function as argument ......');
});

// -- function definition as a function return type 
function funcE(paraOne, paraTwo) {
    return function (paraThree) {
        return paraOne + paraTwo + paraThree;
    }
}

function funcF(paraOne) {
    return function func(paraTwo) {
        return function (paraThree) {
            return () => paraOne + paraTwo + paraThree;
        }
    }
}

console.log(funcE(11, 22)(33));
console.log(funcF(10)(20)(30)());