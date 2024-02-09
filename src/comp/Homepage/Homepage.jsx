import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import bgVid from '../../assets/bgVid.mp4'
import djVid from '../../assets/djVid.mp4'
import Copyright from '../Copyright/Copyright'
import Navbar from '../Navbar/Navbar'
import BookNow from '../BookNow/BookNow'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import BookingForm from '../BookingForm/BookingForm'
import './Homepage.css'
import '../Copyright/Copyright.css'

const Homepage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)   
    const openModal = () => setIsModalVisible(true)
    const closeModal = () => setIsModalVisible(false)

    return (
        <div className='container'>
            
            <video autoPlay muted loop className='bgVid'>
                <source src={bgVid} type='video/mp4' />
            </video>
            <video autoPlay muted loop className='djVid'>
                <source src={djVid} type='video/mp4' />
            </video>

            <header className='header'>
                <img src={logo} className='logo' alt='Pariah - Home' />
                <div className='.navbar'>
                    <Navbar />
                </div>
            </header>

            <div className='hero-section'>
                <div className='booking-button'>
                    <BookNow text='' onClick={openModal} />
                </div>
            </div>

            <ModalWrapper
                className='model-backdrop'
                isVisible={isModalVisible}
                toggleModel={closeModal}
            >            
                <BookingForm />           
            </ModalWrapper>
           
            <div className="footer">
              <Copyright />
            </div>
        
        </div>    
    );
};

export default Homepage;