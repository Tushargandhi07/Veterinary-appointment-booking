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

let form = document.querySelector("form");

form.addEventListener("submit", getAppointment);

// function to post a appointment

async function getAppointment(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let Email = JSON.parse(localStorage.getItem("userDetails"));
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let doctor = document.getElementById("doctor").value;
    let symtoms= document.getElementById("symptoms").value;
    let category= document.getElementById("category").value;


    if(name == "" || Email == "" || phone == "" || date == "" || time == "" || doctor == "" || symtoms == "" || category==""){
        swal(
            'Please fill the the details'
          )
        return;
    }
    else{
        let appointment = {
            name: name,
            email: Email.email,
            phone: phone,
            date: date,
            time: time,
            doctor: doctor,
            symtoms: symtoms,
            category: category
        }
        // let key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1NjcwYzRmZjJhY2RlYTRmZDQ0MWUiLCJpYXQiOjE2ODAxNzI4MzN9.WPSwGoSicD9yx25IxL1lkd1a8SnwzkicUTn_WvS6itA"
        let Data= JSON.parse(localStorage.getItem("userDetails"));
        let email = Data.email;
        let response = await fetch("https://vetcare-89zg.onrender.com/appointment/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization":`${key}`,
                "email":`${email}`
            },
            body: JSON.stringify(appointment)
        });
        let data= await response.json();
            if(data=="Please Login again"){
                swal("Please login again");
                window.location.href = "login.html";
            }
            else if(data=="Appointment Created"){
                swal("Appointment created","","success");
                setTimeout(()=>{
                    window.location.href = "appointment_list.html";
                },2000)
            }
            else{
                swal("Slot Not Available","Try a diffrent time slot","error");
            }
    
  }
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
    window.location.href = "login.html";
  } else {
    window.location.href = "login.html";
  }
});
