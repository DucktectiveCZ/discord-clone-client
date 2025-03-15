import * from './api.js'

function openServer(element) {
    const match = element.id.match(/serverBtn(\d+)/);
    if (match) {
        const serverId = match[1];
        console.log("Opening server ", serverId);
        sessionStorage.setItem('currentServer', JSON.stringify(serverId))
    } else {
        console.error("Invalid server id");
        alert("Error: Invalid server id");
    }
}

function addServer() {
    ;
}

function chatbarKeyPressed(event) {
    ;
}

function sendMessage() {
    ;
}

