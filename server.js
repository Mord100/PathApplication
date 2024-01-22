const express = require('express');
const dotenv = require('dotenv').config();
const connectDB  = require('./config/db')
const colors = require('colors')
const port = process.env.port || 5000

connectDB()

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/bookings', require('./routes/bookingRoute'))


app.listen(port, () => console.log(`Server is running on port ${port}`))