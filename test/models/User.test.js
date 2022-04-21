const User = require('./../../app/models/User');

describe('Unit Test for User class', () => {

    test('Create an User object', () => { 
        const user = new User(1, "alejandromorales", "Alejandro", "Bio", "dateCreated", "dateDeleted");
        expect(user.id).toBe(1);
        expect(user.username).toBe("alejandromorales");
        expect(user.name).toBe("Alejandro");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
});