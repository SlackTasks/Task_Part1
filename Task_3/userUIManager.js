class UserUIManager {

    static addUserToTable(user) {
        const usersList = document.getElementById("user-list");

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.getId()}</td>
        <td>${user.firstName + " " + user.lastName}</td>
        <td>${user.email}</td>
        <td>
        
        <a href="#" class="btn btn-primary btn-sm edit">Edit<a/>
        <a href="#" class="btn btn-danger btn-sm delete">Delete<a/>
        <input type="checkbox" id="checkBox-${user.getId()}">
        
        </td>
        `;


        usersList.appendChild(row);
    }


    static clearFields() {
        document.querySelector("#firstName").value = '';
        document.querySelector("#lastName").value = '';
        document.querySelector("#email").value = '';
    }


    static getUserToEdit(el) {
        if (el.classList.contains('edit')) {

            let fullName = el.parentElement.parentElement.getElementsByTagName("td")[1].innerText;
            let email = el.parentElement.parentElement.getElementsByTagName("td")[2].innerText;

            let firstLastNameArr = fullName.split(' ');
            let firstName = firstLastNameArr[0];
            let lastName = firstLastNameArr[1];

            document.querySelector("#firstName").value = firstName;
            document.querySelector("#lastName").value = lastName;
            document.querySelector("#email").value = email;

            document.getElementById("addSaveBtn").value = "Save";

        }
    }


    static saveEditedUser(rowToEdit, firstName, lastName, email) {
        let fullName = firstName + " " + lastName;

        rowToEdit.parentElement.parentElement.getElementsByTagName("td")[1].innerText = fullName;
        rowToEdit.parentElement.parentElement.getElementsByTagName("td")[2].innerText = email;
    }
}