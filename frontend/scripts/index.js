import { navbar, footer } from "../components/navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();

// Home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

// setting username
let userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
let logged = JSON.parse(localStorage.getItem("loggedIn")) || null;
if (logged) {
  document.getElementById("user").innerText = userDetails?.name;
  document.getElementById("loginbtn").innerText = "Logout";
}

// redirect to account/login
let login_icon = document.getElementById("loginbtn");
login_icon.addEventListener("click", () => {
  if (logged) {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  } else {
    window.location.href = "login.html";
  }
});
