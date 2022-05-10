import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
 <section id='experience'>
   <h5>What skills i have</h5>
   <h2>my experience</h2>

   <div className="container experience__container">
     <div className="experience__frontend">
      <h3>Frontend developement</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>CSS</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>JAVASCRIPT</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>BS4</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>TAILWIND</h4>
          <small className='text-light'>Experienced</small>
       </div>

        </article>
      </div>
     </div>
     <div className="experience__backend">
     <h3>Backend developement</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>NODE JS</h4>
          <small className='text-light'>Experienced</small>
           </div>
       
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

           <div>       
           <h4>Mongo DB</h4>
          <small className='text-light'>Experienced</small>
          </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>MYSQL</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>JAVA</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
      </div>

     </div>
   </div>
 </section>
  )
}

export default Experience