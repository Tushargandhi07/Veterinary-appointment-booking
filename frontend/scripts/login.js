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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(function () {
        window.location.href="index.html";
      }, 2000);
    });
});
