import { } from 'react'
import './BookNow.css'
import PropTypes from 'prop-types'

const BookNow = ({ onClick }) => {
    return (
        <button className='booknow' onClick={onClick}>
            Book Now
        </button>
    )
}

BookNow.propTypes = {
  onClick: PropTypes.func.isRequired
}


export default BookNow