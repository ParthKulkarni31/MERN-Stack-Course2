require('dotenv').config()        // or import 'dotenv/config' // for esm
console.log(process.env.PORT , "===>")          // remove this after you've confirmed that it is working
// Backend Project // Node js  // Express Js // DB - MongoDb  
// Import Express framework (used to create server and APIs)
const express = require('express')
// Create express application instance
const app = express()
// Import CORS library (allows frontend apps to call backend APIs)
const cors = require('cors')
const { connectDB } = require('./config/db')
const { addItem , editItem , deleteItem , getAllItems } = require('./controllers/itemsControllers')
const { login, register } = require('./controllers/authControllers')
const { getDashboardCount } = require('./controllers/dashboardControllers')
const authMiddleware = require('./authMiddleware/authMiddleware')
// Middleware: convert incoming request data into JSON format
app.use(express.json())
// Middleware: enable Cross-Origin Resource Sharing
app.use(cors())
// ----------------------
// MongoDB Database Connection
// ----------------------
connectDB()




// Auth API's = authentication API

app.post("/api/login" , login)
app.post("/api/register" , register)




// Items API
// POST API to create new item
app.post("/api/create-item", authMiddleware, addItem)
// PUT API used to update existing item
app.put("/api/update-item", editItem)
// DELETE API to remove item from database
app.delete("/api/delete-item/:id", deleteItem)
// GET API to fetch all items from database
app.get("/api/get-all-item", getAllItems)




// Dashboard API's
// get all count to show on dashboard 
app.get("/api/get-dashboard" , getDashboardCount)




// Simple API to check server is running or not
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Server is Runing"
    })
})


// ----------------------
// Server Start
// ----------------------
// Define port number where server will run
const PORT = 9090
// Start express server
app.listen(PORT, () => {
    // Show message when server starts
    console.log(`Server is running ${PORT}`)
})