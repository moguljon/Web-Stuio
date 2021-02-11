import React, { Component } from 'react';
import './Booking.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ws from './img/W-S-logo.png';
import free from './img/free.mp4';

class Booking extends Component {
  render() {
    return(
    <section className='section-book'>
      <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={free} type='video/mp4'></source>
            {/* <source src={Mockup1} type='video/webm'></source>
            Your browser is not supported */}
          </video>
        </div>
    
      <Helmet>
         <title>Booking | Web Studios</title>
         <meta name="description" content='Contact Web Studios with potential new projects and questions you may have. Thank you for visiting us.' />
      </Helmet>
      <div className='header__logo-box'>
        <Link to='/' className='mobile-logo'>
          <img src={ws} alt='alt' className='header__logo'/>
        </Link>
      </div> 
      <div className='tc mobile-header'>
      <h2 className='heading-secondary u-margin-top-small u-margin-bottom-medium booking' style={{color: '#fff'}}>Contact Us!</h2>
      </div>
      <div className='contact-section'>

        <div className='side-section removing'>
          <div className='tc tr '>
            <h2 className='heading-secondary u-margin-top-small u-margin-bottom-medium booking'>Contact Us!</h2>
            {/* <p className='side-section__paragraph'>Contact us to discuss pricing and your project. We love to hear about it!</p>
            <p className='side-section__paragraph'>Please give us a brief description, and we will get back to you cheers.</p> */}
            <div className='side-section__container1'>
              <div className='side-section__container2'>
                  <FaLinkedin className='side-section__icon' />
              </div>
              <div className='sizing'>
                <h3 className='side-section__header-three'>For Businesses</h3>
                <p className='side-section__email'>
                  <a href='https://www.linkedin.com/in/jonathan-aguilar-047130ba'>LinkedIn</a>
                </p>
              </div>
            </div>
            <div className='side-section__container1'>
              <div className='side-section__container2'>
                  <FaGithub className='side-section__icon' />
              </div>
              <div className='sizing'>
                <h3 className='side-section__header-three'>For Developers</h3>
                <p className='side-section__email'>
                  <a href='https://github.com/moguljon'>Github</a>
                </p>
              </div>
            </div>
            <div className='side-section__container1'>
              <div className='side-section__container2'>
                  <AiOutlineMail className='side-section__icon' />
              </div>
              <div className='sizing'>
                <h3 className='side-section__header-three'>For Questions</h3>
                <p className='side-section__email'>
                  <a href='mailto:jonathanaguilar@moguljon.com'>Email</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <form name='contact' netlify='true' netlify-honeypot="bot-field" action='/booking' method='post' className='contact-form'>
          <input type='hidden' name='form-name' value='booking' />
          <label className='label' htmlFor='fullname'>Name <span className='asterisk'>*</span></label>
          <input type='text' className='contact-form-text' name='fullname' id='fullname' required />
          <label className='label' htmlFor='email'>Email  <span className='asterisk'>*</span></label>
          <input type='email' className='contact-form-text' name='email' id='email' required />
          <label htmlFor='message' className='label'>Message  <span className='asterisk'>*</span></label>
          <textarea className='contact-form-text' id='message' name='message' required></textarea>
          <button type='submit' className='btn btn--main'>Send Away &rarr;</button>
        </form>
      </div>
    </section>
  )
  }
}

export default Booking;