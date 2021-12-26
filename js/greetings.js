const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginSpan = document.querySelector("#loginSpan");
const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_KEY);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  loginSpan.innerText = `${username}님 환영합니다.😀`;
  loginSpan.classList.remove(HIDDEN_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_KEY);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
