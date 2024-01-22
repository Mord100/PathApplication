const express = require('express');
const router = express.Router();
const { getBookings, setBooking, updateBooking, deleteBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getBookings)

router.post('/', protect, setBooking)

router.put('/:id', protect, updateBooking)

router.delete('/:id', protect, deleteBooking)

module.exports = router