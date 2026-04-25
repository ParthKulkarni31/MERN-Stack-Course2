// user list table in db

const mongoose = require('mongoose')


// ----------------------
// Schema - Model (Database Structure)
// ----------------------


// Define structure of user document in MongoDB
const userSchema = new mongoose.Schema({
    // user name
    name: String,
    // user email
    email: String,
    // user pasword
    password: String,
   
})


// Create collection/table called "Users"
const Users = mongoose.model("Users", userSchema)
module.exports = Users