//Navbar and Footer
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



// Dispaly user profile data
let data = JSON.parse(localStorage.getItem("userDetails"));
function dispalyUserDetails() {
    document.getElementById("name").innerText = data.name;
    document.getElementById("email").innerText=data.email;
    document.getElementById("contact").innerText=data.contact;
    document.getElementById("petName").innerText=data.petname;
    document.getElementById("petType").innerText=data.pettype;
    document.getElementById("petAge").innerText=`${data.petage} years`;
}
dispalyUserDetails();

// setting username
let userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;

if (userDetails) {
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