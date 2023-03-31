//
//  description  https://www.youtube.com/watch?v=qjl1nZlW9q8
//


export default class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validate() {
        if (this.password.length > 6) {
            return true;
        }
        return false;
    }
}





