import React, { useState } from 'react';
import NavigationItem from './NavigationItem';
import classNames from 'classnames';

function Navigation() {
  const [openedMenu, setOpenedMenu] = useState(true);

  const onMenuClickHendler = () => {
    setOpenedMenu(!openedMenu);
  };
  return (
    <nav
      className={classNames(
        'main-nav',
        { 'main-nav--closed': openedMenu },
        { 'main-nav--opened': !openedMenu }
      )}
    >
      <button
        onClick={onMenuClickHendler}
        className='main-nav__button'
        type='button'
      ></button>
      <div
        className={classNames('main-nav__wrapper', {
          'main-nav__wrapper--disabled': openedMenu,
        })}
      >
        <ul className='main-nav__list site-list'>
          <NavigationItem link='/' exact>
            Главная
          </NavigationItem>
          <NavigationItem link='/catalog'>Каталог продукции</NavigationItem>
          <NavigationItem link='/form'>Подбор программы</NavigationItem>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
