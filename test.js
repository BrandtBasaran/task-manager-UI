const taskId = `id`;
const taskList = `tasklist`;
const taskName = `taskname`;

const httpGet = function (url) {
    const options = {
        method: "GET",
        mode: 'no-cors'
    }

    fetch(url, options)
        .then(response => {
            response = {
                "message": "Task GET succesful",
                "status": "success",
                "task": {
                    "taskId": 12345,
                    "taskName": "take out trash",
                    "due-date": "00/22/11"
                }
            }
            console.log(JSON.stringify(response));
        })
        .catch(error => {
            console.error(error);
        });
};

const getData = function () {
    const id = document.getElementById(taskId).value;
    const response = httpGet(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`);
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
        .then(response => {
            console.log(JSON.stringify(response));
            document.getElementById('tasklist').innerHTML = response.body;
        })
        .catch(error => {
            console.log('brandt messed up the puts');
            console.error(error);
        });
}

var putData = function () {
    var id = document.getElementById('id').textContent;
    httpPut(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`);
    console.log(response);
}

var postData = function () {
    var id = document.getElementById('id').textContent;
    let url = `https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`;
    let data = { 'TaskId': `${document.getElementById('id')}`, 'TaskName': `${document.getElementById('taskname')}`, 'Task-List': `${document.getElementById('tasklist')}` };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok) {

            console.log(JSON.stringify(response));
            document.getElementById('tasklist').innerHTML = response.body;

        } else {
            return `HTTP error: ${response.status}`;
        }
    })
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


