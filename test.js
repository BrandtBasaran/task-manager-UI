const userId = document.getElementById('id');
const getButton = document.getElementById('get');
const putButton = document.getElementById('put');
const postButton = document.getElementById('post');
const deleteButton = document.getElementById('delete');
const taskList = document.getElementById('tasklist');
const userName = document.getElementById('userName');

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
};

var getData = function() {
    httpGet('https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/%7Bid%7D');
    console.log(response);
}

function httpPut(url) {

    let payload = {
        userId: `${userId}`,
        title: `${userName}`,
        body: `${taskList}`
    }

    let options = {
        method: "PUT",
        body: JSON.stringify(payload)
    }

    fetch(url, options)
    .then(response => console.log(response.status));
}

var putData = function() {
    httpPut("https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/%7Bid%7D");
}

async function postData() {

    let url = 'https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task';
    let data = {'UserId': `${userId}`, 'UserName': `${userName}`, 'Task-List': `${taskList}`};

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {

        let ret = await res.json();
        return JSON.parse(ret.data);

    } else {
        return `HTTP error: ${res.status}`;
    }
}

var deleteData = function () {
    const element = taskList;
    fetch('https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task', { method: 'DELETE' })
        .then(() => element.innerHTML = 'Delete successful');
}


