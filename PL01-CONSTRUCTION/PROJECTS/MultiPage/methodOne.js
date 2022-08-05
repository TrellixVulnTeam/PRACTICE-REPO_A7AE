let x_http = new XMLHttpRequest();
let element = document.getElementById('#divOne');
let file = 'pageOne.html';
x_http.onreadystatechange = (element.innerHTML = file.responseText);
x_http.open('GET', 'templates/' + file, true);
x_http.send();