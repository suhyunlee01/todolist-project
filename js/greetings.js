const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const logout = document.querySelector("#log-out");
const askName = document.querySelector(".ask-name_text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings();
  askName.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);

function paintGreetings(){
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${userName}`;
  logout.addEventListener("click", loggingOut);
}

function loggingOut()
{
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
  askName.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings();
  logout.classList.remove(HIDDEN_CLASSNAME);
  askName.classList.add(HIDDEN_CLASSNAME);
}

