const asyncHandler = require('express-async-handler')

const Booking = require('../models/bookingModel')


// @desc    Get bookings
// @route   GET /api/bookings
// @access  Private
const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id })

  res.status(200).json(bookings)
})

// @desc    Set bookings
// @route   POST /api/bookings
// @access  Private
const setBooking = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const booking = await Booking.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(booking)
})

// @desc    Update booking
// @route   PUT /api/bookins/:id
// @access  Private
const updateBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id)

  if (!booking) {
    res.status(400)
    throw new Error('Booking not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (booking.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBooking)
})

// @desc    Delete booking
// @route   DELETE /api/bookings/:id
// @access  Private
const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id)

  if (!booking) {
    res.status(400)
    throw new Error('Booking not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the booking user
  if (booking.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

    await Booking.deleteOne({ _id: req.params.id }); // Use deleteOne method directly on the model

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBookings,
  setBooking,
  updateBooking,
  deleteBooking,
}
