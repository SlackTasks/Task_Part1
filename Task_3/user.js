class User {
    static count = 0;
    id = 0;

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

        User.count++;
        this.id = User.count;
    }

    getCount() {
        return User.count;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }


}