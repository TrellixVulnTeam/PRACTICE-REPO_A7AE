////////////////////////////////////////////////////////////////////////////////
var outAA = document.createElement('div');
outAA.setAttribute('id', 'styleOne');
document.body.appendChild(outAA);

////////////////////////////////////////////////////////////////////////////////
function ExAA() {
    class class_aa1 {
        constructor () {
            outAA.innerHTML += '<br >statement of class_aa1';
            outAA.innerHTML += '<br >';
        }
    }

    let let_aa1 = new class_aa1();
}

////////////////////////////////////////////////////////////////////////////////
outAA.innerHTML += 'ex-aa : function and why | function syntax | function return';
outAA.innerHTML += '<hr >'; ExAA();