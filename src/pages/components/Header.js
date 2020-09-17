import React from 'react';

function Header() {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper'>
        <div className='page-logo__wrapper'>
          <a href='/' className='page-header__logo'>
            <picture>
              <source
                media='(min-width: 768px)'
                srcSet='src/assets/logo-tablet.png'
              />

              <img
                className='page-header__logo-image'
                src='/src/assets/logo-mobile.png'
                width='33'
                height='38'
                alt='Логотип'
              />
            </picture>
            <img
              src='./src/assets/logo-mobile-header.png'
              alt='Логотип сайта'
            />
          </a>
        </div>
        <nav className='main-nav main-nav--closed'>
          <button className='main-nav__button' type='button'></button>
          <div className='main-nav__wrapper'>
            <ul className='main-nav__list site-list'>
              <li className='site-list__item site-list__item--active'>
                <a>Главная</a>
              </li>
              <li className='site-list__item'>
                <a href='catalog.html'>Каталог продукции</a>
              </li>
              <li className='site-list__item'>
                <a href='form.html'>Подбор программы</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
