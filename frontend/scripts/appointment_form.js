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
        // let response = await fetch("http://localhost:3000/appointments", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(appointment)
        // });
        // if(response.status == 200){
        //     window.location.href = "http://localhost:3000/appointments";
        // }
        // else{
        //     alert("Something went wrong");
        // }
        console.log(appointment)
        window.location.href = "appointment_list.html"

    }
}
