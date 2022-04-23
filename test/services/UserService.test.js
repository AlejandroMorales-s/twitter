const UserService = require('../../app/services/UserService');

describe("Tests for UserService", () => {
    test('1. Create a new user using the UserService', () => { 
        const user = UserService.create(1, "alejandromorales", "Alejandro");
        expect(user.id).toBe(1);
        expect(user.username).toBe("alejandromorales");
        expect(user.name).toBe("Alejandro");
        expect(user.bio).not.toBeUndefined();
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "alejandromorales", "Alejandro");
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("alejandromorales");
        expect(userInfoInList[2]).toBe("Alejandro");
        expect(userInfoInList[3]).toBe("No bio");
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "alejandromorales", "Alejandro");
        UserService.updateUserUsername(user, "alejandro_m");

        expect(user.username).toBe("alejandro_m");
    })
})