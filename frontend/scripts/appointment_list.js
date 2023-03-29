const Data = [{ id: 5454551212112151, date: "1-1-2023", time: "12:30", status: "accepted" },
{ id: 974551212112151, date: "2-1-2023", time: "16:30", status: "rejected" },
{ id: 4564551212112151, date: "3-1-2023", time: "12:00", status: "accepted" },
{ id: 1224551212112151, date: "4-1-2023", time: "11:30", status: "rejected" },];


function display(data) {
    const tbody = document.getElementById("tbody");
    data.forEach(element => {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = element.id;
        let col2 = document.createElement("td");
        col2.innerText = element.date;
        let col3 = document.createElement("td");
        col3.innerText = element.time;
        let col4 = document.createElement("td");
        col4.innerText = element.status;
        row.append(col1, col2, col3, col4);
        tbody.append(row);
    });
}
display(Data);
