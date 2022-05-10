import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {GrFacebookOption} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


{/*=================================================email.js====================================================*/}
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_08hcafz', 'template_c9bwqpc', form.current, 'E-JlTanU36aaMZ4Gq')
  
    e.target.reset();
};

  return (
  <section id='contact'>
    <h5>get in touch</h5>
    <h2>Contact me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>jksdhafkjh@gmail.com</h5>
          <a href="mailto:asdklfjasdk@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
         <GrFacebookOption  className='contact__option-icon'/>
          <h4>facebook</h4>
          <h5>pralaya</h5>
          <a href="https://facebook.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp  className='contact__option-icon'/>
          <h4>whatsapp</h4>
          <h5>0987654321</h5>
          <a href="https://api.whatsapp.com/send?phone+919647883201" target="_blank">Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required />
        <input type="email" name='email' placeholder='Your email' required />
        <textarea name="message" rows="10" placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>
      </form>

    
    </div>
  </section>
  )
}

export default Contact