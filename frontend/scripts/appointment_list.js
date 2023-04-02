import { navbar, footer } from "../components/navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");
let storeData =[];

// Navbar
navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();

// Home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Display user profile
function display(data) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  data.forEach((element) => {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = element.doctor;
    let col2 = document.createElement("td");
    col2.innerText = element.date;
    let col3 = document.createElement("td");
    col3.innerText = element.time;
    let col4 = document.createElement("td");
    col4.innerText = element.status;
    if (element.status == "pending") {
      col4.style.color = "orange";
    } else if (element.status == "approved") {
      col4.style.color = "green";
    } else {
      col4.style.color = "red";
    }
    let col5 = document.createElement("td");
    if(element.roomId && element.status == "approved"){
      col5.innerText = element.roomId;
    }
    else{
      col5.innerText ="N/A"
    }
    row.append(col1, col2, col3, col5,col4);
    tbody.append(row);
  });
}

// Fetch Data from database
let not_available = document.getElementById("not_available");
async function getData() {
  let data = JSON.parse(localStorage.getItem("userDetails"));
  let userId = data._id;
  let email = data.email;
  if (userId) {
    try {
      let res = await fetch("https://vetcare-89zg.onrender.com/appointment/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id: `${userId}`,
          email: `${email}`,
        },
      });
      let data = await res.json();
      if (data.length > 0) {
        not_available.style.display = "none";
      }
      console.log(data);
      storeData = data;
      display(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    swal("Please login again");
  }
}
getData();

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

let navRedirect = document.getElementById("navredirect");

navRedirect.addEventListener("click", () => {
  if (userDetails) {
    window.location.href = "appointment_form.html";
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please Login First",
      showConfirmButton: true,
    });
  }
});

let filter = document.getElementById("filter");
filter.addEventListener("change", () => {
  if(filter.value==""){
    display(storeData)
  }
  else{
    let filterData= storeData.filter((ele)=>{
      return ele.status == filter.value
    });
    display(filterData);
  }
})