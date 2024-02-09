import './CloseBtn.css'
import PropTypes from 'prop-types'

function CloseBtn ({ onClick }) {
  return (
    <button className='btn-x' onClick={onClick}>
      X
    </button>
  )
}

CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}
export default CloseBtn