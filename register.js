import { register } from './api.js';

function done_button_click() {
  const username = document.getElementById("input_username").textContent;
  const password = document.getElementById("input_password").textContent;
  const email = document.getElementById("input_email").textContent;
  const displayName = document.getElementById("input_displayName").textContent;
  register(username, password, email, displayName)
}
