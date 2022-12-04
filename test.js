const taskId = `id`;
const getButton = `get`;
const putButton = `put`;
const postButton = `post`;
const deleteButton = `delete`;
const taskList = `tasklist`;
const taskName = `taskname`;

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
};

var getData = function() {
    var id = document.getElementById(taskId).textContent;
    httpGet(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`);
    console.log(response);
}

function httpPut(url) {
    let payload = {
        taskId: `${id}`,
        title: `${taskName}`,
        body: `${taskList}`
    }

    let options = {
        method: "PUT",
        body: JSON.stringify(payload)
    }

    fetch(url, options)
    .then(response => console.log(response.status))
    .catch(error => {
        console.log('brandt messed up the puts');
        console.error(error);
    });
}

var putData = function() {
    var id = document.getElementById(taskId).textContent;
    httpPut(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`);
    console.log(response);  
}

var postData = function() {
    var id = document.getElementById(taskId).textContent;
    let url = `https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`;
    let data = {'UserId': `${taskId}`, 'TaskName': `${taskName}`, 'Task-List': `${taskList}`};
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => {
        if (res.ok) {

        let ret = res.json();
        return JSON.parse(ret.data);

    } else {
        return `HTTP error: ${res.status}`;
    }})
    .catch(error => {
        console.log('brandt messed up the post');
        console.error(error);
    });;
}

var deleteData = function () {
    var id = document.getElementById(taskId).textContent;
    fetch(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`, { method: 'DELETE' })
        .then(() => taskList.innerHTML = 'Delete successful')
        .catch(error => {
            console.log('brandt messed up the deletes');
            console.error(error);
        });
}


