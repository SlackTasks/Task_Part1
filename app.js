let data = [
  {
    fullName: "John Doe",
    email: "john@98gmail.com",
  },
  {
    fullName: "James Smith",
    email: "james@98gmail.com",
  },
  {
    fullName: "Linda Gomes",
    email: "lindan@98gmail.com",
  },
  {
    fullName: "Harry Li",
    email: "harry@98gmail.com",
  },
  {
    fullName: "Alison Parker",
    email: "alison@98gmail.com",
  },
  {
    fullName: "Sara Parker",
    email: "sara@98gmail.com",
  },
];

window.onload = () => {
  loadTableData(data);
};

function idGenerator() {
  return Math.random().toString(32).slice(2);
}
function loadTableData(data) {
  const tableBody = document.getElementById("tableData");
  let htmlData = "";
  for (let user of data) {
    user.id = idGenerator();
    htmlData += `<tr><td>${user.id}</td><td>${user.fullName}</td><td>${user.email}</td><td>
  <i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i><input type="checkbox" /> 
    </td></tr>`;
  }
  tableBody.innerHTML = htmlData;
}

function addUser() {
  let email = document.querySelector(".email").value;
  let name = document.querySelector(".name").value;
  let surname = document.querySelector(".surname").value;
  let inputs = document.querySelectorAll(".inputFields input");
  if (name && surname && email) {
    let fullName = `${name} ${surname}`;
    let user = {
      id: idGenerator(),
      fullName,
      email,
    };
    data.push(user);
    inputs.forEach((input) => (input.value = ""));
    loadTableData(data);
  }
}
document.querySelector(".addButton").addEventListener("click", addUser);
