// let element = document.getElementById('divOne')
// let file = '../FILE_Node/textFile.txt'
// let reader = new FileReader();
// reader.readAsText();
// reader.onload = () => element.innerHTML = reader.result; 
// element.innerHTML = 'script ........';


let textarea = document.querySelector('textarea');
let input = document.querySelector('input');

input.addEventListener('change', () => {    
    let reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = (e) => {
        textarea.value = e.target.result.split(/#/);
        return textarea.value;
    }
});

// let object = {
//     proOne: 11,
//     proTwo: 22,
//     methodOne: function () {
//         return this.proOne + this.proTwo;
//     },
//     methodTwo: function() {
//         document.write('<br >');
//         document.write('value : ' + (this.proOne + this.proTwo));
//     }
// };

// document.write('<br > value : ');
// document.write(object.methodOne());
// object.methodTwo();