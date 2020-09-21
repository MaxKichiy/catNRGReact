import React, { useState } from 'react';
import classNames from 'classnames';
import beforeMob from '../scss/assets/before-mobile.png';
import afterMob from '../scss/assets/after-mobile.png';
import beforeDesk from '../scss/assets/before-desktop.png';
import afterDesk from '../scss/assets/after-desktop.png';
import afterFullDesk from '../scss/assets/afterFullDesk.png';
import beforeFullDesk from '../scss/assets/beforeFullDesk.png';

function Example() {
  const [after, setAfter] = useState(false);

  const onSetAfter = () => {
    setAfter(true);
  };
  const onSetBefore = () => {
    setAfter(false);
  };
  return (
    <section className='example-page'>
      <div className='example-page__wrapper'>
        <div className='example__left'>
          <h2 className='example-page__title'>Живой пример</h2>
          <p className='example-page__text'>
            Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
            Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
            этом он не менял своих привычек и по-прежнему спит по 16 часов в
            день.
          </p>
          <ul className='example-page__properties properties'>
            <li className='properties__item'>
              <p className='properties__item-title'>5 кг</p>
              <span className='properties__item-text'>снижение веса</span>
            </li>
            <li className='properties__item'>
              <p className='properties__item-title'>60 дней</p>
              <span className='properties__item-text'>затрачено времени</span>
            </li>
          </ul>

          <div className='example-page__slogan'>
            Затраты на питание: <span>15 000 руб</span>.
          </div>
        </div>
        <div className='example-page__picture'>
          <picture className='example-page__picture-mobile'>
            <source
              media='(min-width: 768px)'
              srcSet={after ? afterFullDesk : beforeFullDesk}
            />
            <img
              className={classNames(
                { 'example-page__picture--before': !after },
                { 'example-page__picture--after': after }
              )}
              src={after ? afterMob : beforeMob}
              alt='До программы'
            />
          </picture>
          <div className='example-page__picture-desktop'>
            {after ? (
              <div className='example-page__slider example-page__slider--after'>
                <img src={afterFullDesk} alt='' />
              </div>
            ) : (
              <div className='example-page__slider example-page__slider--before'>
                <img src={beforeFullDesk} alt='' />
              </div>
            )}
          </div>
          <div className='example-page__picture-toggles picture-toggles'>
            {!after ? (
              <div className='picture-toggles__field picture-toggles__field--before'></div>
            ) : (
              <div className='picture-toggles__field picture-toggles__field--after'></div>
            )}

            <p
              onClick={onSetBefore}
              className='picture-toggle picture-toggle--before'
            >
              Было
            </p>
            <p
              onClick={onSetAfter}
              className='picture-toggle picture-toggle--after'
            >
              Стало
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Example;
