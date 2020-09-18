import React from 'react';
import Button from './components/Button';
import Program from './components/Program';
import Example from './Example';
import Faq from './Faq';
function Main() {
  return (
    <>
      <main className='page-main'>
        <div className='page-main__wrapper'>
          <h1 className='page-main__title'>Функциональное питание для котов</h1>
          <p className='page-main__text'>Занялся собой? Займись котом!</p>

          <Button clsName='page-main__button'>Подобрать программу</Button>

          <div className='page-main__programs'>
            <Program type='slim'>
              <p className='program-example__title'>Похудение</p>
              <p className='program-example__text'>
                Ваш кот весит больше собаки и почти утратил способность лазить
                по деревьям? Пора на диету! Cat Energy Slim поможет вашему
                питомцу сбросить лишний вес.
              </p>
            </Program>
            <Program type='mass'>
              <p className='program-example__title'>Набор массы</p>
              <p className='program-example__text'>
                Заработать авторитет среди дворовых котов и даже собак? Серия
                Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
              </p>
            </Program>
          </div>
        </div>
      </main>

      <Faq />
      <Example />
    </>
  );
}

export default Main;
