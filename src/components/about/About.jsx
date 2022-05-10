import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
  
    <h5>Get to know</h5>
    <h2>about me</h2>
  
    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="" />
      </div>
    </div>
    <div className="about_content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ years</small>
       </article>
       <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>300+ worldwide</small>
       </article>
       <article className='about__card'>
          <BsFolder2 className='about__icon'/>
          <h5>Projects</h5>
          <small>80+ completed projects</small>
       </article>

      </div>

      <p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Sed quibusdam quis amet cumque, 
        earum quasi molestiae necessitatibus ullam 
        quae ratione distinctio culpa voluptatum dignissimos
         error eligendi dolore? Quam, exercitationem reprehenderit.</p>
         
         <a href="#contact" className='btn btn-primary'>Lets talk</a>
    </div>
  
    </div>
  </section>
  )
}

export default About