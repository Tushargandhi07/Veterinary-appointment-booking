let data={
    name: "default",
    email: "default@example.com",
    contact: "123456789",
    petName: "bruno",
    petType: "dog",
    petAge: "2"
}

function dispalyUserDetails() {
    document.getElementById("name").innerText = data.name;
    document.getElementById("email").innerText=data.email;
    document.getElementById("contact").innerText=data.contact;
    document.getElementById("petName").innerText=data.petName;
    document.getElementById("petType").innerText=data.petType;
    document.getElementById("petAge").innerText=`${data.petAge} years`;
}
dispalyUserDetails()