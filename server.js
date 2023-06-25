// DEPENDENCIES
const express = require('express')
const app = express()

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CONTROLLER SETUP
app.use('/bands', bandsController);

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})