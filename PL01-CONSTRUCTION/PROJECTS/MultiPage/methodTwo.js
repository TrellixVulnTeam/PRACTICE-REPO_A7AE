const element = document.querySelector('#divOne');
fetch('pageOne.html')
.then(response => response.text())
.then(data => {
    element.innerHTML = data + 'Script-two'
});