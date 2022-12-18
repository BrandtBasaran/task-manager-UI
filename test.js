var option = {
    animation: true,
    delay: 5000
};
const taskId = `id`;
const taskList = `tasklist`;
const taskName = `taskname`;

const Toasty = function () {
    var toastHTMLElement = document.getElementById("EpicToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
};

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
            document.getElementById("restext").innerHTML = response.body;
            Toasty();
        })
        .catch(error => {
            document.getElementById('restext').innerHTML = 'brandt messed up the get';
            Toasty();
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
            response = {
                "message": "Task PUT succesful",
                "status": "success",
                "task": { "taskId": 12345 }
            }
            console.log(JSON.stringify(response));
            document.getElementById('restext').innerHTML = response.body;
        })
        .catch(error => {
            document.getElementById('restext').innerHTML = 'brandt messed up the puts';
            Toasty();
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
        response = {
            "message": "Task POST succesful",
            "status": "success",
            "task": { "taskId": 12345 }
        }
        if (response.ok) {
            console.log(JSON.stringify(response));
            document.getElementById('restext').innerHTML = response.body;
        } else {
            return `HTTP error: ${response.status}`;
        }
    })
        .catch(error => {
            document.getElementById('restext').innerHTML = 'brandt messed up the post';
            Toasty();
        });;
}

var deleteData = function () {
    var id = document.getElementById('id').textContent;
    fetch(`https://q36ezw76zh.execute-api.us-east-1.amazonaws.com/task/${id}`, { method: 'DELETE' })
        .then(() => {
            document.getElementById('restext').innerHTML = 'Delete successful';
            Toasty();
        })
        .catch(error => {
            document.getElementById('restext').innerHTML = 'brandt messed up the delete';
            Toasty();
        });
}


