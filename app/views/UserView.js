const UserService = require('./../services/UserService');
class UserView {
    static createUser(payload) {
        if(payload === null) {
            return {
                error: 'payload no existe'
            }
        } else if(Object.values(payload).includes(null) === true) {
            return {
                error: 'necesitan tener un valor válido'
            }
        }
    }
}
module.exports = UserView;