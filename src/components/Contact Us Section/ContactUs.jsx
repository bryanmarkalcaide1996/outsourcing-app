import './ContactUs.css';
import React, {useState, useRef, useEffect} from 'react'

const ContactUs = () => {
    const fNameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const [contact, setContact] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const formObject = {
        fName: fNameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
        }
  }
  return (
    <div className='container'>
      <div className='bg-card'>
        <form className='form' action="" onSubmit={handleSubmit}>
           <h1>Contact Us</h1> 
            <input type="text" placeholder='Full Name' ref={fNameRef}/>
            <input type="email" placeholder='Email' ref={emailRef}/>
            <input type="text" placeholder='Subject' ref={subjectRef}/>
            <textarea name="" id="" cols="48" rows="10" placeholder='Your message' ref={messageRef}/>
            <input type="submit" value='Send Message'/>
        </form>
    </div>
    </div>
  )
}

export default ContactUs