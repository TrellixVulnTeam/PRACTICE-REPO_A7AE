// search all data from database through middleware
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://127.0.01:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

// search specific data from database through middleware
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', function () {
    const searchInput = document.querySelector('#search-input');
    const searchValue = searchInput.value;
    searchInput.value = '';

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

// show data to web
function loadHTMLTable(data) {
    const table = document.querySelector('#tableData tbody');
    
    if (data.length === 0) {
        table.innerHTML = '<tr><td class="no-data" colSpan="5">No Data</td></tr>';
        return;
    }

    let tableHtml = '';
    data.forEach(function ({id, name, date}) {
        tableHtml += '<tr>';
        tableHtml += '<td>' + id + '</td>';
        tableHtml += '<td id=col>' + name + '</td>';
        tableHtml += '<td id=col>' + new Date(date).toLocaleString() + '</td>';
        tableHtml += '<td><button class="delete-btn" data-id=' + id + '>Delete</button></td>';
        tableHtml += '<td><button class="edit-btn" data-id=' + id + '>Edit</button></td>';
        tableHtml += '</tr>';
    });

    table.innerHTML = tableHtml;
}

// show data live update (not necessary) / alternate use (location.reload())
// function insertRowIntoTable(data) {
//     const table = document.querySelector('#tableData tbody');
//     // const isTableData = table.querySelector('.no-data');
    
//     let tableHtml = '<tr >';

//     tableHtml += '<td>' + data + '</td>';
//     tableHtml += '<td id=colTwo>' + data.name + '</td>';
//     tableHtml += '<td id=colThree>' + new Date(data.date).toLocaleString() + '</td>';

//     // for (var key in data) {
//     //     if (data.hasOwnProperty(key)) {
//     //         if (key === 'date') {
//     //             data[key] = new Date(data[key]).toLocaleString();
//     //         }
//     //         tableHtml += '<td>' + data[key] + '</td>';
//     //     }
//     // }

//     tableHtml += '<td><button class="delete-btn" data-id=' + data.id + '>Delete</button></td>';
//     tableHtml += '<td><button class="edit-btn" data-id=' + data.id + '>Edit</button></td>';
//     tableHtml += '</tr>';

//     // if (isTableData) {
//     //     table.innerHTML = tableHtml;
//     // } else {
//     //     const newRow = table.insertRow();
//     //     newRow.innerHTML = tableHtml;
//     // }

//     const newRow = table.insertRow();
//     newRow.innerHTML = tableHtml;
// }


// send data to database through middleware
const addBtn = document.querySelector('#add-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#add-input');
    const name = nameInput.value;
    nameInput.value = '';
    
    if(name != '') {
        fetch('http://localhost:5000/insert', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        });
        // .then(response => response.json())
        // .then(data => insertRowIntoTable(data['data']));
    }
}

// select action on data
document.querySelector('#tableData tbody').addEventListener('click', function(event) {
    if (event.target.className === 'delete-btn') {
        deleteRowData(event.target.dataset.id);
    }
    if (event.target.className === 'edit-btn') {
        updateRowData(event.target.dataset.id);
    }
});

// delete data from database through middleware
function deleteRowData(id) {
    fetch('http://localhost:5000/delete/' + id, { 
        method: 'DELETE' 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

// update data of database through middleware
function updateRowData(id) {
    document.querySelector('#add-row').hidden = true;
    document.querySelector('#update-row').hidden = false;
    document.querySelector('#update-input').dataset.id = id;
}

const updateBtn = document.querySelector('#update-btn');

updateBtn.onclick = function () {
    const updateInput = document.querySelector('#update-input');

    if (updateInput.value != '') {
        fetch('http://localhost:5000/update', {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: updateInput.dataset.id,
                name: updateInput.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                updateInput.value = '';
                location.reload();
            }
        });
    }
}

// ======================================================
// 1. addEventListener() | arg.target.identifier (className | dataset.id)
// 2. onclick
// 3. querySelector()
// 4. forEach()
// 5. fetch() method
// ======================================================
// 5. The fetch() method in JavaScript is used to request to the server and 
// -- load the information on the webpages. The request can be of any APIs 
// -- that return the data of the format JSON or XML. This method returns a 
// -- promise.
// fetch('url')           //api for the get request
//   .then(response => response.json())
//   .then(data => console.log(data));
// Parameters: This method accepts two parameters as mentioned above and 
// -- described below:
// -- -- URL: It is the URL to which the request is to be made.
// -- -- Options: It is an array of properties. It is an optional parameter.
// -- -- Return Value: It returns a promise whether it is resolved or not. 
// -- The return data can be of the format JSON or XML. It can be an array 
// -- of objects or simply a single object.

// For long XMLHttpRequest is being used by web developer’s trusted “amigo”. 
// -- XMLHttpRequest has enabled ajax and a whole new kind of interactive exposure.
// -- However, it is being slowly succeeded by the Fetch API. 
// -- These both deliver the same work i.e. fetching data asynchronously from a 
// -- different network, but the Fetch API is Promise based. 
// -- This provides a more cleaner and more concise syntax.
// -- The Fetch API provides the fetch() method defined on a window object. 
// -- This is used to perform requests. 
// -- This method returns a Promise which can be further used to retrieve 
// -- response of the request. 
// fetch(url) //call the fetch function passing the url of the API as a parameter
// .then(function(){  });
// .catch(function(){ });

// -- NOTE: By default, fetch() will not send or receive any cookies from 
// -- the server, resulting in unauthenticated requests.
// -- Below are list of methods which can be used when we get a response on 
// -- what we want to do with the information: 
// -- clone(): for creating a clone of response.
// -- redirect(): for creating strong response with different url.
// -- arrayBuffer(): we return a Promise that resolves with an ArrayBuffer.
// -- formData(): also returns a Promise that resolves with a FormDataObject.
// -- blob(): same as above only that resolves with a blob.
// -- text(): this resolves with a string.
// -- json(): it resolves promise with JSON.

// Request: 
// -- A Request object represents the request part of a fetch call. 
// -- By passing fetch a Request you can make advanced and customized requests: 
// -- method: GET, POST, PUT
// -- url: URL of the request
// -- headers: Headers object
// -- referrer: referrer of the request
// -- mode: cors, no-cors, same-origin
// -- 1credentials: should cookies go with the request? omit, same-origin
// -- cache: cache mode (default, reload, no-cache)

// LOADING JSON 
// -- We cannot block the user interface waiting until the request completes. 
// -- That is why fetch() method returns a Promise. A promise is actually an 
// -- object which represents a future result. 
// -- The then() method is used to wait for the response from the server-side 
// -- and log it to the console. Below code snippet explains the above logic: 
// fetch('https://www.reddit.com/r?/javascript/top/.json?limit=5')
// .then(res=>res.json())
// .then(json=>console.log(json));

// Async…await 
// -- This provides a more concise way to process Promises. 
// -- Its functionality is that we can mark a function as async, 
// -- then wait for the promise to finish with the await, and access 
// -- the result as a normal object. 
// -- Simple example demonstrating how async…await can be used: 
// async function demo(subject){
//      const URL='https://www.reddit.com/r/javascript/top/.json?limit=5';
//      const Res= fetch(URL);
//      const response= await Res;
//      const json= await response.json();
//      console.log(json);
//  }
//  demo('javascript');

// HANDLING ERRORS: 
// -- What if we ask the server for a non-existing resource that requires 
// -- permissions/authorization? With fetch(), we can handle application-level 
// -- errors like 404 responses.
// -- Although Fetch API is superseding XMLHttpRequest still a beginner needs 
// -- to learn XMLHttpRequest to make more effective use of Fetch API.