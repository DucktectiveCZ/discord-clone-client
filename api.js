const API_BASE = "http://localhost:8080/api/v1";

async function registerUser({ username, password, email, displayName, pronouns, aboutMe }) {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email, displayName, pronouns, aboutMe })
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}

async function loginUser({ username, password }) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json(); 
}

async function getUserById(id, token) {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json(); 
}

async function getMe(token) {
  const res = await fetch(`${API_BASE}/me`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Failed to fetch current user");
  return res.json(); 
}

async function getAvatarDecors() {
  const res = await fetch(`${API_BASE}/avatarDecors`);
  if (!res.ok) throw new Error("Failed to fetch avatar decors");
  return res.json();
}