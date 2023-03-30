let form= document.querySelector('form');

form.addEventListener('submit', getAppointment);

// function to post a appointment
async function getAppointment(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let doctor = document.getElementById("doctor").value;
    let symtoms= document.getElementById("symptoms").value;
    let category= document.getElementById("category").value;


    if(name == "" || email == "" || phone == "" || date == "" || time == "" || doctor == "" || symtoms == "" || category==""){
        swal(
            'Please fill the the details'
          )
        return;
    }
    else{
        let appointment = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            doctor: doctor,
            symtoms: symtoms,
            category: category
        }
        let key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1NjcwYzRmZjJhY2RlYTRmZDQ0MWUiLCJpYXQiOjE2ODAxNzI4MzN9.WPSwGoSicD9yx25IxL1lkd1a8SnwzkicUTn_WvS6itA"
        let response = await fetch("http://localhost:7500/appointment/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${key}`
            },
            body: JSON.stringify(appointment)
        });
        let data= await response.json();
            if(data=="Please Login again"){
                swal("Please login again");
            }
            else if(data=="Appointment Created"){
                swal("Appointment created","","success");
            }
            else{
                swal("Slot Not Available","Try a diffrent time slot","error");
            }
    }
}
