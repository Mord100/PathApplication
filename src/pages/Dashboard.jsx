import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BookingForm from '../components/BookingForm'
import BookingItem from '../components/BookingItem'
import Spinner from '../components/Spinner'
import { getBookings, reset } from '../features/bookings/bookingSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { bookings, isLoading, isError, message } = useSelector(
    (state) => state.bookings
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getBookings())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>App Dashboard</p>
      </section>

      <BookingForm />

      <section className='content'>
        {bookings.length > 0 ? (
          <div className='bookings'>
            {bookings.map((bookings) => (
              <BookingItem key={bookings._id} bookings={bookings} />
            ))}
          </div>
        ) : (
          <h3>You don't have any bookings</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
