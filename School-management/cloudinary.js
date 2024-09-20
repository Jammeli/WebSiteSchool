const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "djgh4n7eg", 
    api_key: "335319861149166", 
    api_secret: "ptSVdnAYuHkHnwv3ui6Zdd4KatQ"
});

module.exports = cloudinary;
