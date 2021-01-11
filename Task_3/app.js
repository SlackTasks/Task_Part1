document.getElementById("user-form").addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    const newUser = new User(firstName, lastName, email);

    console.log(newUser);

    UserUIManager.addUserToTable(newUser);
    UserUIManager.clearFields();
});