let rowToEdit = null;

document.addEventListener('DOMContentLoaded', UserUIManager.showUsers);


document.getElementById("user-form").addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    if (document.getElementById("addSaveBtn").value === "Add") {

        if (firstName !== '' && lastName !== '' && email !== '') {
            const newUser = new User(firstName, lastName, email);

            UserUIManager.addUserToTable(newUser);

            UserLocalStorageManager.addUser(newUser);
        }
    } else if (document.getElementById("addSaveBtn").value === "Save" && rowToEdit !== null) {

        UserUIManager.saveEditedUser(rowToEdit, firstName, lastName, email);
    }

    UserUIManager.clearFields();

    document.getElementById("addSaveBtn").value = "Add";
});


document.querySelector("#user-list").addEventListener('click', (e) => {
    UserUIManager.performAction(e.target);
    rowToEdit = e.target;
});


document.getElementById("search").addEventListener("keyup", (e) => {
    
    let filter = e.target.value.toUpperCase();
   
    let userList = document.getElementById("user-list");
    let rows = userList.rows;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let fullName = row.cells[1].textContent;

        if (fullName.toUpperCase().includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
    
});