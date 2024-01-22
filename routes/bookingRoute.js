const express = require('express');
const router = express.Router();
const { getBookings, setBooking, updateBooking, deleteBooking } = require('../controllers/bookingController');

router.get('/', getBookings)

router.post('/', setBooking)

router.put('/:id', updateBooking)

router.delete('/:id', deleteBooking)

module.exports = router