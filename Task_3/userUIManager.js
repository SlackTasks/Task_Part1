class UserUIManager {

    static savedUsers = 0;

    static isBulkBtnCreated = false;
    static checkedCount = 0;

    static showUsers() {
        const users = UserLocalStorageManager.getUsers();
        users.forEach((user) => {
            UserUIManager.addUserToTable(user);
        });
    }

    static addUserToTable(user) {
        const usersList = document.getElementById("user-list");

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.firstName + " " + user.lastName}</td>
        <td>${user.email}</td>
        <td>
        
        <a href="#" class="btn btn-primary btn-sm edit">Edit<a/>
        <a href="#" class="btn btn-danger btn-sm delete">Delete<a/>
        <input type="checkbox" class="bulkDeleteCheck">
        
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
            const id =  el.parentElement.parentElement.getElementsByTagName("td")[0].innerText;
            
            el.parentElement.parentElement.remove();
            UserLocalStorageManager.deleteUserById(id);

            UserUIManager.savedUsers--;

            UserUIManager.makeUserTableIDsSequential();

        } else if (el.classList.contains('bulkDeleteCheck')) {
            
            if (el.checked) {
                UserUIManager.checkedCount++;
                
                if (UserUIManager.checkedCount >= 2 &&
                     UserUIManager.isBulkBtnCreated==false) {
                        UserUIManager.addBulkDeleteButton();
                        UserUIManager.isBulkBtnCreated = true;           
                     }
            } else {
                
                UserUIManager.checkedCount--;
                
                if (UserUIManager.checkedCount < 2 
                    && UserUIManager.isBulkBtnCreated==true) {
                    UserUIManager.isBulkBtnCreated = false;

                    document.getElementById("bulkDeleteBtn").remove();
                }
            }
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

        let id = rowToEdit.parentElement.parentElement.getElementsByTagName("td")[0].innerText;
        UserLocalStorageManager.editUser(id, firstName, lastName, email);

        rowToEdit.parentElement.parentElement.getElementsByTagName("td")[1].innerText = fullName;
        rowToEdit.parentElement.parentElement.getElementsByTagName("td")[2].innerText = email;
    }


    static addBulkDeleteButton() {  
        var bulkDeleteDiv = document.getElementById("bulkDelete");  
           
        var button = document.createElement('BUTTON');       
        var text = document.createTextNode("Bulk Delete");                 
        button.appendChild(text); 

        button.setAttribute("id", "bulkDeleteBtn");
        button.setAttribute("class", "btn btn-primary btn-block");

        button.addEventListener('click', (e) => {
            UserUIManager.bulkDelete();
        });
          
        
        bulkDeleteDiv.appendChild(button); 
    }  


    static bulkDelete() {
        const userList = document.getElementById("user-list");
        const userListRows = userList.rows;

        let idsToBeBulkRemoved = [];

        let i = 0;

        while (i < userListRows.length) {
            const row = userListRows[i];

            var rowCheckBox = row.cells[3].getElementsByClassName('bulkDeleteCheck')[0];

            var id = row.cells[0].innerText;

            if (rowCheckBox.checked) {
                rowCheckBox.parentElement.parentElement.parentElement.remove();

                idsToBeBulkRemoved.push(id);
                
                i = 0;
                UserUIManager.checkedCount--;
                UserUIManager.savedUsers--;
                
            } else {
                i++;
            }
            
        }

        if (UserUIManager.checkedCount < 2 
            && UserUIManager.isBulkBtnCreated==true) {
            UserUIManager.isBulkBtnCreated = false;

            document.getElementById("bulkDeleteBtn").remove();
            
        }

        UserLocalStorageManager.bulkDeleteByIDList(idsToBeBulkRemoved);

        UserUIManager.makeUserTableIDsSequential();
    }
}