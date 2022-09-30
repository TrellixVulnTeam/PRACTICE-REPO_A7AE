console.log('javascript prototype .......');

let obj_one = {
    proOne: 11,
    proTwo: 22, 
    method: function () {
        console.log('sum is : ' + (this.proOne + this.proTwo));
    }
}

obj_one.method();

// function FuncA() {
//     let obj = {
//         proOne: 10,
//         proTwo: 20,
//         method: function() {
//             console.log('sum is : ' (this.proOne + this.proTwo));
//         }
//     };

//     return obj;
// }

// let obj_two = FuncA();
// obj_two.method();

function FuncAA() {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.methodOne = function () {
        console.log('sum is : ' + (this.proOne + this.proTwo));
    }
}

let obj_two = new FuncAA(100, 400);
obj_two.methodOne();

obj_two.methodTwo = function () {
    console.log('sub is : ' + (this.proOne - this.proTwo));
}

obj_two.methodTwo();

FuncAA.prototype.methodThree = function () {
    console.log('mul is : ' + (this.proOne * this.proTwo));
}

let obj_three = new FuncAA(111, 222);
obj_three.methodOne();
obj_three.methodThree();

let OBJ01 = {
    proX: 10,
    proY: 20,
    methodXY: function () {
        console.log(this.proX + this.proY);
    }
}

let OBJ02 = function () {
    this.proOne = 11,
    this.proTwo = 22,
    this.method = function () {
        console.log(this.proOne + this.proTwo);
    }
}

let OBJ02_1 = new OBJ02();

// should not use
// OBJ02_1.__proto__ = OBJ01;

let OBJ03 = [10, 20];

let OBJ04 = function () {
    let varOne = 10;
    let varTwo = 20;
    return varOne + varTwo;
}

let Obj_AA = {
    proOne: 11.11,
    proTwo: 22.22,
}

let Obj_AB = {
    proThree: 33.33
}

Obj_AB.__proto__ = Obj_AA;