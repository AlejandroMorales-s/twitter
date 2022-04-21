class User {
    constructor(id, username, name, bio, dateCreated, dateUpdated, dateDeleted, lastUpdated) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
        this.dateDeleted = dateDeleted;
        this.lastUpdated = lastUpdated;
    }
}
module.exports = User;