document.getElementById("user-form").addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    const newUser = new User(firstName, lastName, email);

    UserUIManager.addUserToTable(newUser);

    UserUIManager.clearFields();

    document.getElementById("addSaveBtn").value == "Add";
});