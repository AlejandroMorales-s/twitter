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

    test('Add getters', () => {
        const user = new User(1, "alejandromorales", "Alejandro", "Bio");
        
        expect(user.getUsername).toBe("alejandromorales");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });

    test('Add setters', () => {
        const user = new User(1, "alejandromorales", "Alejandro", "Bio");
        user.setUsername = "alejandromorales";
        expect(user.getUsername).toBe("alejandromorales");
        
        user.setBio = "New Bio";
        expect(user.getBio).toBe("New Bio");
    });
    
});
