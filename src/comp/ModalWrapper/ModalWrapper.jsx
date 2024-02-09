import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn/CloseBtn'

const ModalWrapper = ({ children, isVisible, toggleModal }) => {
  if (!isVisible) return null

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <CloseBtn onClick={toggleModal} />
      </div>
    </div>
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ModalWrapper