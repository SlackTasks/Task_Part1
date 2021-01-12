class User {
    
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = UserUIManager.savedUsers;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

}