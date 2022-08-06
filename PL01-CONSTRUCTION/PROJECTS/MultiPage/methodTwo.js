const element = document.querySelector('body');

element.addEventListener('click', function (event) {
    let FILE;
    const container = document.querySelector('#divTwo');

    if (event.target.dataset.id === '1') FILE = 'pageOne.html'; 
    else if (event.target.dataset.id === '2') FILE = 'pageTwo.html';
    else FILE;

    fetch(FILE)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
    });
});