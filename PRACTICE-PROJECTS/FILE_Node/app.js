const fs = require('fs');
// const element = document.querySelector('pre');
// nodeJS - does not understand DOM method 

function write(dataArg) {
    fs.writeFile('textFile.txt', dataArg, err => {
        if (err) {
            console.log(err);
            return; 
        }
    });

    read();
}

function append(dataArg) {
    fs.appendFile('textFile.txt', dataArg, err => {
        if (err) {
            console.log(err);
            return; 
        }
    })

    read();
}

function read() {
    fs.readFile('textFile.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } 
        console.log(data);
    });    
}

write('text added');
// append();