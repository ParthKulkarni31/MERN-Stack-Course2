const mongoose = require('mongoose')


const connectDB = () => {
    try {
        // Connect Node.js server with MongoDB database
        mongoose.connect(process.env.MONGO_DB_URL)
            // If connection successful show message in console
            .then(() => console.log("Mongo DB Connected"))
            // If error occurs print error
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}


module.exports = { connectDB }