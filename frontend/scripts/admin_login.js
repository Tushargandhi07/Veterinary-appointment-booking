import { navbar, footer } from "../components/navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();

let userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
let logged = JSON.parse(localStorage.getItem("loggedIn")) || null;
if (logged) {
  document.getElementById("user").innerText = userDetails?.name;
  document.getElementById("loginbtn").innerText = "Logout";
}

// redirect to account/login
let login_icon = document.getElementById("loginbtn");
login_icon.addEventListener("click", () => {
  if (userDetails) {
    localStorage.removeItem("userDetails");
    window.location.href = "login.html";
  } else {
    window.location.href = "login.html";
  }
});

// Home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  if (email === "admin@gmail.com" && password === "admin") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successful",
      showConfirmButton: false,
      timer: 1500,
    });
     setTimeout(function () {
          window.location.href = "admin.html";
        }, 2000);
  }
  else{
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Invalid Credentials",
      showConfirmButton: true,
    });
  }
});
