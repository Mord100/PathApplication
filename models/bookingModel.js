const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema(
    {
    text: {
        type: String,
        reuired: [true, 'Please add a text value'],
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Booking', bookingSchema)