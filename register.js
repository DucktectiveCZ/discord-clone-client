const api_url = "http://localhost:8080/api/v1";

function done_button_click() {
    const username = document.getElementById("input_username").textContent;
    const password = document.getElementById("input_password").textContent;
    const email = document.getElementById("input_email").textContent;
    const displayName = document.getElementById("input_displayName").textContent;

    fetch(api_url+"/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({username:username, password:password})
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Uh oh, the duck couldn’t fly :[");
        }
        return response.json();
      })
      .then(data => {
        console.log("Yay! Server got the duck!", data);
      })
      .catch(error => {
        console.error("Something went wrong:", error);
        alert("Oh nooo the duck got lost!");
      });
}
