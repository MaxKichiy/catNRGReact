import React from 'react';
import classNames from 'classnames';

import slim from '../../scss/assets/catSlim.png';
import mass from '../../scss/assets/catMass.png';
import slim200 from '../../scss/assets/catSlim200.png';
import mass200 from '../../scss/assets/catMass200.png';

function Program(props) {
  let slimData = null;
  if (props.type === 'slim') {
    slimData = (
      <>
        <source media='(min-width: 768px)' srcSet={slim200} />
        <img className='program-example__img' src={slim} alt='' />
      </>
    );
  } else {
    slimData = (
      <>
        <source media='(min-width: 768px)' srcSet={mass200} />
        <img className='program-example__img' src={mass} alt='' />
      </>
    );
  }

  return (
    <div
      className={classNames(
        'page-main__program',
        ' program-example',
        `program-example--${props.type}`
      )}
    >
      <div className='program-circle'>
        <picture>{slimData}</picture>
      </div>
      {props.children}
      <hr />
      <a href={`${props.type}`} className='program-example__link'>
        Каталог {props.type === 'slim' ? `${props.type}` : 'PRO'}
      </a>
      <svg
        className='program-example__arrow'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z' fill='black' />
      </svg>
    </div>
  );
}

export default Program;
