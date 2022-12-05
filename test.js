const taskId = `id`;
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
    var id = document.getElementById('id').textContent;
    httpGet(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`);
    console.log(response);
}

function httpPut(url) {
    let payload = {
        taskId: `${document.getElementById('id')}`,
        title: `${document.getElementById('taskname')}`,
        body: `${document.getElementById('tasklist')}`
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
    var id = document.getElementById('id').textContent;
    httpPut(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`);
    console.log(response);  
}

var postData = function() {
    var id = document.getElementById('id').textContent;
    let url = `https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`;
    let data = {'UserId': `${document.getElementById('id')}`, 'TaskName': `${document.getElementById('taskname')}`, 'Task-List': `${document.getElementById('tasklist')}`};
    
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
    var id = document.getElementById('id').textContent;
    fetch(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`, { method: 'DELETE' })
        .then(() => document.getElementById('tasklist').innerHTML = 'Delete successful')
        .catch(error => {
            console.log('brandt messed up the deletes');
            console.error(error);
        });
}


