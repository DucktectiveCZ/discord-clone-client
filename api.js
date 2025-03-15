function register(serverUrl, username, nick, password) {
    fetch(serverUrl + '/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            nickname: nick,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response Data:', data);
        return true;
    })
    .catch(error => {
        console.error('Error:', error);
        return false;
    });
}

function login(serverUrl, username, password) {
    fetch(serverUrl + '/login/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
        return data["token"];
    })
    .catch(error => {
        console.error('Error:', error);
        return null;
    });
}

function getChannels(token) {
    fetch(serverUrl + '/channels/', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        return null;
    });
}

function getMessages(token, channel, start, count) {
    fetch(serverUrl + '/channels/', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            start: 0,
            count: 127
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        return null;
    });
}

function postMessage(serverUrl, token, messageText) {
    fetch(serverUrl + '/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            content: {
                text: messageText
            }
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response Data:', data);
        return true;
    })
    .catch(error => {
        console.error('Error:', error);
        return false;
    });
}


