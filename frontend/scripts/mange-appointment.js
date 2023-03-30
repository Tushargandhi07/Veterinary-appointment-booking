const Data = [{ id: 5454551212112151, date: "1-1-2023", time: "12:30", status: "accepted" },
{ id: 974551212112151, date: "2-1-2023", time: "16:30", status: "rejected" },
{ id: 4564551212112151, date: "3-1-2023", time: "12:00", status: "accepted" },
{ id: 1224551212112151, date: "4-1-2023", time: "11:30", status: "rejected" },];

function showAppointments(Data){
   let appointments = Data.map((item)=>{
      return `
      <tr>
        <td>
          <h4>${item.id}</h4>
        </td>
        <td>
          <h4>${item.date}</h4>
        </td>
        <td>
          <h4>${item.time}</h4>
        </td>
        <td>
          <h4>${item.status}</h4>
        </td>
        <td>
          <button>Accept</button>
        </td>
        <td>
          <button>Reject</button>
        </td>
      </tr>
      `
   })

    document.getElementById("appointment").innerHTML=appointments.join(" ")
}

showAppointments(Data)

