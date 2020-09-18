import React from 'react';
import classNames from 'classnames';

function Button({ clsName, ...props }) {
  return (
    <button className={classNames(clsName, 'button')}>{props.children}</button>
  );
}

export default Button;
