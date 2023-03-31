import { navbar, footer } from "../components/navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

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
    data.forEach(element => {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = element._id;
        let col2 = document.createElement("td");
        col2.innerText = element.date;
        let col3 = document.createElement("td");
        col3.innerText = element.time;
        let col4 = document.createElement("td");
        col4.innerText = element.status;
        if(element.status=="pending"){
            col4.style.color = "orange"
        }
        else if(element.status=="accepted"){
            col4.style.color = "green"
        }
        else{
            col4.style.color = "red"
        }
        row.append(col1, col2, col3, col4);
        tbody.append(row);
    });
}
async function getData() {
    // let key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1NjcwYzRmZjJhY2RlYTRmZDQ0MWUiLCJpYXQiOjE2ODAxNzI4MzN9.WPSwGoSicD9yx25IxL1lkd1a8SnwzkicUTn_WvS6itA"
    let data= JSON.parse(localStorage.getItem("userDetails"));
    let userId = data._id;
    let email=data.email;
    if(userId  && key){
        try {
            let res = await fetch("http://localhost:7500/appointment/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization":`${key}`,
                    "id":`${userId}`,
                    "email":`${email}`
                },
            })
            let data = await res.json();
            console.log(data);
            display(data);
        } catch (error) {
            console.log(error);
        }
       
    }
    else{
        swal("Please login again");
    }
    
}
getData();
