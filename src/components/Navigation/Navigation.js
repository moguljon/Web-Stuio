import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
// import netlifyIdentity from 'netlify-identity-widget';


// netlifyIdentity.init();
class Navigation extends Component {
  render() {
    return(
      <section className='navigaiton'>
        <input type='checkbox' className='navigation__checkbox' id='navi-toggle'></input>
        <label htmlFor='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>
            &nbsp;
          </span>
        </label>

  
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
        <h2 style={{color: "white", fontSize: '2.2rem', letterSpacing: '2px'}} className='tc'>Web Studios </h2>
          <ul className='navigation__list'>

            <li className='navigation__item'>
               <a className='navigation__link' href='/booking'>booking</a>
              {/* <Link to='/' className='navigation__link'>Home</Link> */}
            </li> 
            <li className='navigation__item'>
              <Link to='/work' className='navigation__link'>Projects</Link>
            </li>
            <li className='navigation__item'>
              <Link to='/blog' className='navigation__link'>Blog</Link>
            </li>
            <li className='navigation__item'>
              <Link to='/booking' className='navigation__link'>Booking</Link>
            </li>  
          </ul>
        </nav>

        
      <nav className='nav'>

      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
        <ul className='nav__list'>
          <li className='nav__item home'>
           
            <Link to='/' className='nav__link dark'>Home</Link>
          </li>
          <li className='nav__item'>
            <Link to='/work' className='nav__link dark'>Projects</Link>
          </li>
          <li className='nav__item'>
            <Link to='/blog' className='nav__link dark'>Blog</Link>
          </li>
          <li className='nav__item'>
            <Link to='/booking' className='nav__link dark'> Booking</Link>
          </li>
        </ul>
        
      </nav>
      </section>
    )
  }
  
}

export default Navigation;