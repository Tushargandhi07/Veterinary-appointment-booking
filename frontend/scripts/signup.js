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
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let contact = document.getElementById("contact").value;
  let petname = document.getElementById("petName").value;
  let pettype = document.getElementById("petType").value;
  let petage = document.getElementById("petAge").value;

  let registerDetails = {
    name,
    email,
    password,
    contact,
    petname,
    pettype,
    petage,
  };

  fetch("http://localhost:7500/user/register", {
    method: "POST",
    body: JSON.stringify(registerDetails),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("userDetails", JSON.stringify(registerDetails));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign Up Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(function () {
        window.location.href="login.html";
      }, 2000);
    });
});
