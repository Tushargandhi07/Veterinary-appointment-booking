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
  if (logged) {
    localStorage.removeItem("loggedIn");
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

  let loginDetails = {
    email,
    password,
  };

  fetch("http://localhost:7500/user/login", {
    method: "POST",
    body: JSON.stringify(loginDetails),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data == "Wrong Credentials") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Credentials",
          showConfirmButton: true,
        });
      } else if (data == "Please Login again") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please Login Again",
          showConfirmButton: true,
        });
      } else {
        localStorage.setItem("loggedIn", JSON.stringify(loginDetails));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(function () {
          window.location.href = "index.html";
        }, 2000);
      }
    })
    .catch((error) => console.log(error));
});
