import { navbar, footer } from "../../../components/navbar.js";
// const socket = io('http://localhost:8080/');
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();


const roomID = document.getElementById('roomID');
const joinRoom = document.getElementById('joinRoom');
joinRoom.onclick = (e) => {
    e.preventDefault();  

    const RoomID = roomID.value;

    localStorage.setItem("RoomID" , RoomID)

    window.location.href = "./chat.html"
}


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
    window.location.href = "../../login.html";
  } else {
    window.location.href = "../../login.html";
  }
});

// Home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "../../index.html";
});




let navRedirect = document.getElementById("navredirect");

navRedirect.addEventListener("click", () => {
  if (userDetails) {

    window.location.href = "../../appointment_form.html";
    
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please Login First",
      showConfirmButton: true,
    });
  }
});