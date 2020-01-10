const DataStore = require('nedb');
const fs = require('fs');
/* Initialize databases : One for the images, the other one for the users */
const images = new DataStore({ filename: './data/photos', autoload: true});
const users = new DataStore({ filename: './data/users', autoload: true});

/* Create a unique index for img name and user ip */
images.ensureIndex({ fieldName: 'name', unique: true }, function(err) {
});
users.ensureIndex({ fieldName: 'ip', unique: true }, function(err) {
});

/* Read the dir where all the images are stored */
const images_from_dir = fs.readdirSync("./images");

/* Insert images inside the img database and add like and dislike parameters */
images_from_dir.forEach(function(img) {
    images.insert({
        name: img,
        likes: 0,
        dislikes: 0
    });
});

/* Images and users data are sets available to the code that uses require('database') */
module.exports = {
    images: images,
    users: users
};