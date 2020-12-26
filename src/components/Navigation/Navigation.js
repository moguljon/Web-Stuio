import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

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
          
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <a className='navigation__link' href='/portfolio'>Portfolio</a>
              {/* <Link to='/work' className='navigation__link'>Projects</Link> */}
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/blog'>Blog</a>
              {/* <Link to='/blog' className='navigation__link'>Blog</Link> */}
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/prices'>Pricing</a>
              {/* <Link to='/blog' className='navigation__link'>Blog</Link> */}
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/booking'>Booking</a>
              {/* <Link to='/booking' className='navigation__link'>Booking</Link> */}
            </li>  
          </ul>
        </nav>

        
      <nav className='nav'>

      <div className='header__logo-box'>
        <div className='new-logo'>
          <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;E</p>
        </div>
        <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;E</p>
          </div>
        </div>
      </Link>
      </div>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/portfolio' className='nav__link dark'>Portfolio</Link>
          </li>
          <li className='nav__item'>
            <Link to='/blog' className='nav__link dark'>Blog</Link>
          </li>
          <li className='nav__item home'>
           <Link to='/prices' className='nav__link dark'>Pricing</Link>
         </li>
          <li className='nav__item'>
            <Link to='/booking' className='nav__link dark'>Booking</Link>
          </li>
        </ul>
      </nav>
      </section>
    )
  }
  
}

export default Navigation;