let data = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@98gmail.com",
  },
  {
    id: 2,
    fullName: "James Smith",
    email: "james@98gmail.com",
  },
  {
    id: 3,
    fullName: "Linda Gomes",
    email: "lindan@98gmail.com",
  },
  {
    id: 4,
    fullName: "Harry Li",
    email: "harry@98gmail.com",
  },
  {
    id: 5,
    fullName: "Alison Parker",
    email: "alison@98gmail.com",
  },
  {
    id: 6,
    fullName: "Sara Parker",
    email: "sara@98gmail.com",
  },
];

window.onload = () => {
  loadTableData(data);
};

function loadTableData(data) {
  const tableBody = document.getElementById("tableData");
  let htmlData = "";
  for (let user of data) {
    htmlData += `<tr><td>${user.id}</td><td>${user.fullName}</td><td>${user.email}</td><td>
  <i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i><input type="checkbox" /> 
    </td></tr>`;
  }
  tableBody.innerHTML = htmlData;
}
