import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
  <section id='services'>
    <h5>What i offer</h5>
    <h2>services</h2>
{/*=============================================1st card===============================*/}
    <div className="container services__container">
      
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>


        </ul>
      </article>
      {/*=============================================END OF 1st card start of 2nd card===============================*/}

      <article className="service">
        <div className="service__head">
          <h3>Web Developement</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>


        </ul>
      </article>

            {/*=============================================END OF 2st card start of 3rd card===============================*/}

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>


        </ul>
      </article>
            {/*=============================================END OF 3rd card===============================*/}
    </div>
  </section>
  )
}

export default Services