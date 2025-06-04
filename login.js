import { login } from './api.js';

function done_button_click() {
  const username = document.getElementById("input_username").textContent;
  const password = document.getElementById("input_password").textContent; 
  login(username, password)
}
