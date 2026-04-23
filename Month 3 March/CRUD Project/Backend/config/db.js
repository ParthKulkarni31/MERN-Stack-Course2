const mongoose = require('mongoose')


const connectDB = () => {
    try {
        // Connect Node.js server with MongoDB database
        mongoose.connect("mongodb://127.0.0.1:27017/item-database")
            // If connection successful show message in console
            .then(() => console.log("Mongo DB Connected"))
            // If error occurs print error
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}


module.exports = { connectDB }