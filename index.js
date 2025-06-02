

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


document.body.className = "theme-rainbow";
document.body.className = "theme-dark";
document.body.className = "theme-duk";

//i just needa save this somewhere so i wont lose it whoopsie
//<button onclick="document.body.className = 'theme-rainbow'">Rainbow :D</button>
//<button onclick="document.body.className = 'theme-dark'">duk theme :D</button>
//<button onclick="document.body.className = 'theme-duk'">duk blu theme :D</button>