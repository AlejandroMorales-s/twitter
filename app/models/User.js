class User {
    constructor(id, username, name, bio, dateUpdated, dateDeleted) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.dateUpdated = dateUpdated;
        this.dateDeleted = dateDeleted;
        this.lastUpdated = new Date();
    }
}
module.exports = User;