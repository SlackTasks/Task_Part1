class UserLocalStorageManager {
    static getUsers() {
        let users;

        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'));
        }

        return users;
    }


    static addUser(user) {
        const users = UserLocalStorageManager.getUsers();
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

    }


    static editUser(id, firstName, lastName, email) {
        const users = UserLocalStorageManager.getUsers();
        let editedUsers = [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].firstName = firstName;
                users[i].lastName = lastName;
                users[i].email = email;
                
            }
            editedUsers.push(users[i]);
        }

        localStorage.setItem('users', JSON.stringify(editedUsers));

    }

    static deleteUserById(id) {
        const users = UserLocalStorageManager.getUsers();

        let i = 0;
        while (i < users.length) {

            if (users[i].id == id) {
                users.splice(i, 1);
                //i = 0;
            } else {
                if (users.length > 0) {
                    users[i].id = i;
                }
                i++;
            }

        }

        localStorage.setItem('users', JSON.stringify(users));
    }


    static bulkDeleteByIDList(arr) {
        const users = UserLocalStorageManager.getUsers();

        let newBulkedUsers = [];

        let j = 0;

        for (let i = 0; i < users.length; i++) {
            
            if ( !arr.includes(JSON.stringify(users[i].id))) {
                newBulkedUsers[j] = users[i];
                newBulkedUsers[j].id = j;
                j++;
            } 
            
        }

        localStorage.setItem('users', JSON.stringify(newBulkedUsers));
    }
}