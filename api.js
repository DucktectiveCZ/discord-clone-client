const api_url = "http://localhost:8080/api/v1"

export function register(username, password, email, displayName, pronouns) {
    fetch(api_url+"/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({username:username, password:password, email:email, displayName:displayName, pronouns:pronouns})
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

export function login(username, password) {
    fetch(api_url+"/login", {
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