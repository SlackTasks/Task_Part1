class UserUIManager {

    static savedUsers = 0;

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
        UserUIManager.savedUsers++;
    }


    static clearFields() {
        document.querySelector("#firstName").value = '';
        document.querySelector("#lastName").value = '';
        document.querySelector("#email").value = '';
    }



    static performAction(el) {
        if (el.classList.contains('edit')) {
            UserUIManager.getUserToEdit(el);
        } else if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();

            UserUIManager.savedUsers--;

            UserUIManager.makeUserTableIDsSequential();

        }
    }


    static getUserToEdit(el) {
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


    static makeUserTableIDsSequential() {
        const userListRows = document.getElementById("user-list").rows;
        const len = userListRows.length;

        for (let i = 0; i < len; i++) {
            userListRows[i].cells[0].innerText = i;
        }


    }



    static saveEditedUser(rowToEdit, firstName, lastName, email) {
        let fullName = firstName + " " + lastName;

        rowToEdit.parentElement.parentElement.getElementsByTagName("td")[1].innerText = fullName;
        rowToEdit.parentElement.parentElement.getElementsByTagName("td")[2].innerText = email;
    }
}