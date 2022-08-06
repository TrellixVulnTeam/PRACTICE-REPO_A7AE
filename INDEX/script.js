const element = document.querySelector('pre');

document.addEventListener('DOMContentLoaded', function() {
    fetch('../PRO COURSES AND SCHEDULE')
    .then(response => response.text())
    .then(data => {
        element.innerHTML = data
    });
});

element.addEventListener('click', function (event) {
    let FILE;
    
    switch(event.target.dataset.id) {
        case 'PL1.1': FILE = '../PL01-CONSTRUCTION/Construction-01'; break;
        case 'PL1.2': FILE = '../PL01-CONSTRUCTION/Construction-02'; break;
        case 'PL1.3': FILE = '../PL01-CONSTRUCTION/Construction-03'; break;
        case 'PL2.1': FILE = '../PL02-ARCHITECT/Architect-01'; break;
        case 'PL2.2': FILE = '../PL02-ARCHITECT/Architect-02'; break;
        case 'PL3.1': FILE = '../PL03-QUALITY ASSURANCE/Quality Assurance-01'; break;
        case 'PL3.2': FILE = '../PL03-QUALITY ASSURANCE/Quality Assurance-02'; break;
        case 'PL4.1': FILE = '../PL04-LOGIC AND SERVICE/Logic Design-01'; break;
        case 'PL4.2': FILE = '../PL04-LOGIC AND SERVICE/Logic Design-02'; break;
        case 'PL4.3': FILE = '../PL04-LOGIC AND SERVICE/Service Design'; break;
        case 'PL5.1': FILE = '../PL05-INTELLIGENT SYSTEM/Intelligent System-01'; break;
        case 'PL5.2': FILE = '../PL05-INTELLIGENT SYSTEM/Intelligent System-02'; break;
        case 'PL5.3': FILE = '../PL05-INTELLIGENT SYSTEM/Intelligent System-03'; break;
        case 'PL6.1': FILE = '../PL06-SYSTEM OPERATION/System Operation-01'; break;
        case 'PL6.2': FILE = '../PL06-SYSTEM OPERATION/System Operation-02'; break;
        case 'PL6.3': FILE = '../PL06-SYSTEM OPERATION/System Operation-03'; break;

        default: FILE = '../PRO COURSES AND SCHEDULE'; break;
    }

    switch(event.target.dataset.id) {
        case 'S1.01.1A': FILE = '../PL01-CONSTRUCTION/01. JavaScript/LESSON-01/lesson-1A.txt'; break;
        case 'S1.01.1B': FILE = '../PL01-CONSTRUCTION/01. JavaScript/LESSON-01/lesson-1B.txt'; break;
        case 'S1.01.1C': FILE = '../PL01-CONSTRUCTION/01. JavaScript/LESSON-01/lesson-1C.txt'; break;
        case 'S1.01.1D': FILE = '../PL01-CONSTRUCTION/01. JavaScript/LESSON-01/lesson-1D.txt'; break;
        case 'S1.01.1E': FILE = '../PL01-CONSTRUCTION/01. JavaScript/LESSON-01/lesson-1E.txt'; break;

        default: FILE = '../PL01-CONSTRUCTION/Construction-01'; break;
    }

    fetch(FILE)
    .then(response => response.text())
    .then(data => {
        element.innerHTML = data
    });
});