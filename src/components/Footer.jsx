import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}}
    className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h3>Contact Us</h3>
        <h5 className="fw-bolder"><MdAttachEmail/>resumebuilder@gmail.com</h5>
        <h5 className="fw-bolder"><FaPhoneAlt/>1234567890</h5>
        <h4>Connect with us</h4>
        <div className="d-flex justify-content-center fs-4 my-3">
            <FaWhatsapp className='me-3'/>
            <FaInstagram className='me-3'/>
            <FaFacebook/>
        </div>
        <p>Design and built with using React</p>
    </div>
  )
}

export default Footer