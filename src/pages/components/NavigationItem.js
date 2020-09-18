import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

function NavigationItem(props) {
  return (
    <li className={classNames('site-list__item')}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName='site-list__item--active site-list__item--disabled'
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
