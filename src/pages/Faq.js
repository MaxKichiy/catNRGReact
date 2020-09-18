import React from 'react';
import adv1 from '../scss/assets/advantage-1.png';
import adv2 from '../scss/assets/andvantage-2.png';
import adv3 from '../scss/assets/advantage-3.png';
import adv4 from '../scss/assets/advantage-4.png';

function Faq() {
  return (
    <section className='faq-page'>
      <div className='faq-page__wrapper'>
        <h2 className='faq-page__title'>Как это работает</h2>
        <ul className='faq-page__list faq-list'>
          <li className='faq-list__item'>
            <img src={adv1} className='faq-list__item-image' />
            <p className='faq-list__item-text'>
              Функциональное питание содержит только полезные питательные
              вещества.
            </p>
            <span>1</span>
          </li>
          <li className='faq-list__item'>
            <img src={adv2} className='faq-list__item-image' />
            <p className='faq-list__item-text'>
              Выпускается в виде порошка, который нужно лишь залить кипятком и
              готово..
            </p>
            <span>2</span>
          </li>
          <li className='faq-list__item'>
            <img src={adv3} className='faq-list__item-image' />
            <p className='faq-list__item-text'>
              Замените один-два приема обычной еды на наше функциональное
              питание.
            </p>
            <span>3</span>
          </li>
          <li className='faq-list__item'>
            <img src={adv4} className='faq-list__item-image' />
            <p className='faq-list__item-text'>
              Уже через месяц наслаждайтесь изменениями к лучшему вашего
              питомца!
            </p>
            <span>4</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Faq;
