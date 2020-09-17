import React from 'react';

function Main() {
  return (
    <>
      <main className='page-main'>
        <div className='page-main__wrapper'>
          <h1 className='page-main__title'>Функциональное питание для котов</h1>
          <p className='page-main__text'>Занялся собой? Займись котом!</p>

          <button className='page-main__button button'>
            Подобрать программу
          </button>

          <div className='page-main__programs'>
            <div className='page-main__program program-example program-example--shrink'>
              <svg
                className='program-example__img'
                // style='transform:scaleX(-1)'
                width='14'
                height='16'
                viewBox='0 0 14 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13 8C13 8.33333 13.1667 9 13.5 10C13.8333 11 14 11.6667 14 12C14 12.6771 13.8984 13.3177 13.6953 13.9219C13.4922 14.526 13.1953 15.0234 12.8047 15.4141C12.4141 15.8047 11.9792 16 11.5 16H4.5C4.36458 16 4.2474 15.9505 4.14844 15.8516C4.04948 15.7526 4 15.6354 4 15.5C4 15.3646 4.04948 15.2474 4.14844 15.1484C4.2474 15.0495 4.36458 15 4.5 15C4.64583 15 4.76562 14.9531 4.85938 14.8594C4.95312 14.7656 5 14.6458 5 14.5C5 14.2292 4.89583 13.9141 4.6875 13.5547C4.47917 13.1953 4.22917 12.8255 3.9375 12.4453C3.64583 12.0651 3.35417 11.6719 3.0625 11.2656C2.77083 10.8594 2.52083 10.4115 2.3125 9.92188C2.10417 9.43229 2 8.95833 2 8.5C2 7.71875 2.3125 7.07292 2.9375 6.5625C2.8125 6.1875 2.5 6 2 6C1.69792 6 1.38281 5.89323 1.05469 5.67969C0.726562 5.46615 0.46875 5.24219 0.28125 5.00781C0.09375 4.77344 0 4.60417 0 4.5C0 4.36458 0.0494792 4.2474 0.148438 4.14844C0.247396 4.04948 0.364583 4 0.5 4C0.583333 4 0.671875 3.92708 0.765625 3.78125C0.859375 3.63542 0.966146 3.45312 1.08594 3.23438C1.20573 3.01562 1.34375 2.79427 1.5 2.57031C1.65625 2.34635 1.86458 2.13802 2.125 1.94531C2.38542 1.7526 2.67708 1.61979 3 1.54688V0C3.23958 0 3.52083 0.184896 3.84375 0.554688C4.16667 0.924479 4.375 1.30729 4.46875 1.70312C4.96875 1.91146 5.34896 2.27344 5.60938 2.78906C5.86979 3.30469 6 3.875 6 4.5C6 4.80208 6.0651 5.08854 6.19531 5.35938C6.32552 5.63021 6.51042 5.8724 6.75 6.08594C6.98958 6.29948 7.1849 6.46094 7.33594 6.57031C7.48698 6.67969 7.67708 6.80208 7.90625 6.9375C7.94792 6.96875 7.97917 6.98958 8 7C8.60417 7.34375 9.10417 7.67708 9.5 8C10.2188 8.59375 10.8151 9.33854 11.2891 10.2344C11.763 11.1302 12 11.8854 12 12.5C12 12.5417 12.0052 12.5885 12.0156 12.6406C12.026 12.6927 12.0729 12.7656 12.1562 12.8594C12.2396 12.9531 12.3542 13 12.5 13C12.6458 13 12.7656 12.9193 12.8594 12.7578C12.9531 12.5964 13 12.3438 13 12C13 11.6354 12.9323 11.2708 12.7969 10.9062C12.6615 10.5417 12.4948 10.1953 12.2969 9.86719C12.099 9.53906 11.901 9.19792 11.7031 8.84375C11.5052 8.48958 11.3385 8.0651 11.2031 7.57031C11.0677 7.07552 11 6.55208 11 6C11 5.5 11.2083 5.04167 11.625 4.625C12.0417 4.20833 12.5 4 13 4C13.2812 4 13.5182 4.09635 13.7109 4.28906C13.9036 4.48177 14 4.71875 14 5C14 5.16667 13.9688 5.3151 13.9062 5.44531C13.8438 5.57552 13.763 5.69531 13.6641 5.80469C13.5651 5.91406 13.5104 5.97917 13.5 6C13.1667 6.55208 13 7.21875 13 8Z'
                  fill='black'
                />
              </svg>

              <p className='program-example__title'>Похудение</p>
              <p className='program-example__text'>
                Ваш кот весит больше собаки и почти утратил способность лазить
                по деревьям? Пора на диету! Cat Energy Slim поможет вашему
                питомцу сбросить лишний вес.
              </p>
              <hr />
              <a href='#' className='program-example__link'>
                Каталог Slim
              </a>
              <svg
                className='program-example__arrow'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z'
                  fill='black'
                />
              </svg>
            </div>
            <div className='page-main__program program-example program-example--mass'>
              <img
                src='./src/assets/mass.svg'
                alt='Логотип набора массы'
                className='program-example__img'
              />
              <svg
                className='program-example__img'
                width='67'
                height='28'
                viewBox='0 0 67 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xlink='http://www.w3.org/1999/xlink'
              >
                <rect width='67' height='28' fill='url(#pattern0)' />
                <defs>
                  <pattern
                    id='pattern0'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                  ></pattern>
                  <image
                    id='image0'
                    width='67'
                    height='28'
                    xlink='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAcCAYAAAA6EgJRAAADyElEQVRYhd2ZaYiNURjHf65ZLLNJY51BdpGJCMmSKTSyjUaS7QsfyIf5oiiyJKGQ8pUkpCwxET5MMxj7VpghM4TsS0NjuZYZHT23juOc+753Ga751/lw3/ss53ne5zzLeZvx75EDTAEmA/2BzkAACAL3gSrgAlABXAe++9hxNtAdaAdkAZ+Bp8AN4ItGNxoYB6xWP/6GM1oBQ4BBQBegLZABtBRHDIhAljLqojjmEvAISAV6AANFx2CgvYNfObgE2CB6d4nj1UuojJO9f6ATsBQoB74CDQm2HgI/tD0tUQYkxdH4ImAUkAf0jJ9fGwXdDKEqOmJ2RgcJublA88SxNWLEnC7GAK8T8AhEs16oXKa/zYAI8YN84IQkwqaANN2WYuAj8BLo62FcH6C2iUSEvj4o4wq0B0Gp8y6o+n3PEKJK0iZgz3/ujF/9R7n2YFsYR2QClzVaVZ6mav+XJKiR9cByYLsH3TkkGkIPujoc0RG4qtEdANK1/0cl8Bt/pu1zLHDWQXcc40GWxREjgScazQqjFCVJm5yozgga9qQAbyx0ZzDK41FpaVVTMgHYK2HWIDPBAouz1sRhw2oGWQjsb6SONcXY800Ljcp57PMhrA6YZHHEDM1ZsazFmkyVwNca0RjrMiP+kCGvQgY7egHvwyi7LS22iUXAN49NKrnrgNnGLGCuLhb56igOA1YBpQ6+t8BBH8lxgiFbDYtlciqGm4r7AYel1jZIH1EqxyLZoFVzxzEP5RXCm6bxrXTQVlkcYWKehe+BjOjIbBRuP3dC84eBFj50OzFa6rFL6UlgqIM5WUZuk2eHh86A48hM02hUFD32cEhhLIbbcN6hqFamVi+st/DO8uDpbOGptAxXxR7OOB1PR6Q6kmWNjxY+hEILvxdvroXH5ng1Z50K44x66aDjgn4WBS8dyc+FPIuMXA+eFIP+SpiRO1NuwFwOsbUGUaHAInx8hILSLFVlhA8+PU/N8aBVb/+WwxlH4uWM+YbgsijlXDDkFHvQ9zboXSODDlVlqi3OqJPjboWt3LhgdnHRJqRdxu8ij5sm84rOz+34K5lDaoznrX0kbF9YHGFJdEGV2GuWnmGr1jfoaG+06LuBNj515VgipFpyS0zId5Q4P2fetsm7FnmPHLdnWyzhvtanLpWgn1v2XSR3uFEhIN2iacDZKOWlSzSEJsig9Cu2MM6Qj0Cm7nyfusaGGQDfAZvVUY30VliV15nGGVed384I5USDbPnYE8I3+UL2yacs9ZFpIzDR8f/0v2BDwkFdRKkc9XuEwLKfR+cQLJkKZ0oAAAAASUVORK5CYII='
                  />
                </defs>
              </svg>
              <p className='program-example__title'>Набор массы</p>
              <p className='program-example__text'>
                Заработать авторитет среди дворовых котов и даже собак? Серия
                Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
              </p>
              <hr />
              <a href='#' className='program-example__link'>
                Каталог pro
              </a>
              <svg
                className='program-example__arrow'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <section className='faq-page'>
        <div className='faq-page__wrapper'>
          <h2 className='faq-page__title'>Как это работает</h2>
          <ul className='faq-page__list faq-list'>
            <li className='faq-list__item'>
              <img
                src='./src/assets/advantage-1.png'
                className='faq-list__item-image'
              />
              <p className='faq-list__item-text'>
                Функциональное питание содержит только полезные питательные
                вещества.
              </p>
              <span>1</span>
            </li>
            <li className='faq-list__item'>
              <img
                src='./src/assets/andvantage-2.png'
                className='faq-list__item-image'
              />
              <p className='faq-list__item-text'>
                Выпускается в виде порошка, который нужно лишь залить кипятком и
                готово..
              </p>
              <span>2</span>
            </li>
            <li className='faq-list__item'>
              <img
                src='./src/assets/advantage-3.png'
                className='faq-list__item-image'
              />
              <p className='faq-list__item-text'>
                Замените один-два приема обычной еды на наше функциональное
                питание.
              </p>
              <span>3</span>
            </li>
            <li className='faq-list__item'>
              <img
                src='./src/assets/advantage-4.png'
                className='faq-list__item-image'
              />
              <p className='faq-list__item-text'>
                Уже через месяц наслаждайтесь изменениями к лучшему вашего
                питомца!
              </p>
              <span>4</span>
            </li>
          </ul>
        </div>
      </section>
      <section className='example-page'>
        <div className='example-page__wrapper'>
          <div className='example__left'>
            <h2 className='example-page__title'>Живой пример</h2>
            <p className='example-page__text'>
              Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм
              на Cat Energy Slim. Отличный результат без изнуряющих тренировок!
              При этом он не менял своих привычек и по-прежнему спит по 16 часов
              в день.
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
            <picture>
              <source
                media='(min-width: 768px)'
                srcSet='./src/assets/before-desktop.png'
              />
              <img
                className='example-page__picture--before'
                src='./src/assets/before-mobile.png'
                alt='До программы'
              />
            </picture>
            <img
              className='example-page__picture--after'
              src='./src/assets/after-desktop.png'
            />

            <div className='example-page__picture-toggles picture-toggles'>
              <div className='picture-toggles__field'></div>
              <p className='picture-toggle picture-toggle--before'>Было</p>
              <p className='picture-toggle picture-toggle--after'>Стало</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
