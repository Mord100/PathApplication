const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const connectDB  = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.port || 5000

connectDB()
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/bookings', require('./routes/bookingRoute'))
app.use('/api/users', require('./routes/userRoute'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))