const User = require('./../models/user');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "No bio");
    }
    static getInfo(o) {
        return Object.values(o);
    }
    static updateUserUsername(user, username) {
        user.username = username;
    }
}

module.exports = UserService;