import React from 'react';
import logoMobile from '../../scss/assets/logo-mobile.png';
import logoMobile2 from '../../scss/assets/logo-mobile-header.png';
import tabletMobile from '../../scss/assets/logo-tablet.png';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper'>
        <div className='page-logo__wrapper'>
          <NavLink to='/' className='page-header__logo'>
            <picture>
              <source media='(min-width: 768px)' srcSet={tabletMobile} />

              <img
                className='page-header__logo-image'
                src={logoMobile}
                width='33'
                height='38'
                alt='Логотип'
              />
            </picture>
            <img src={logoMobile2} alt='Логотип сайта' />
          </NavLink>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
