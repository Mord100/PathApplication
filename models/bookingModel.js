const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
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