//Navbar and Footer
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