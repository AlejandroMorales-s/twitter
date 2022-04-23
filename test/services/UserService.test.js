const UserService = require('../../app/services/UserService');

describe("Tests for UserService", () => {
    test('1. Create a new user using the UserService', () => { 
        const user = UserService.create(1, "alejandromorales", "Alejandro");
        expect(user.id).toBe(1);
        expect(user.username).toBe("alejandromorales");
        expect(user.name).toBe("Alejandro");
        expect(user.bio).not.toBeUndefined();
    })
})