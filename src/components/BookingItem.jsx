import { useDispatch } from 'react-redux'
import { deleteBooking } from '../features/bookings/bookingSlice'

function BookingItem({ booking }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(booking.createdAt).toLocaleString('en-US')}</div>
      <h2>{booking.text}</h2>
      <button onClick={() => dispatch(deleteBooking(booking._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default BookingItem
