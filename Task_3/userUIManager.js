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
}