import React from 'react';
import CatalogItem from './components/CatalogItem';

function Catalog() {
  return (
    <>
      <main className='page-secondary'>
        <div className='page-secondary__wrapper'>
          <h1 className='page-secondary__title'>Каталог продукции</h1>
          <ul className='page-secondary__catalog catalog'>
            <CatalogItem />
            <li className='catalog__item'>
              <div className='catalog__item-image'>
                <picture>
                  <source
                    media='(min-width: 768px)'
                    srcSet='./src/assets/catalog-2-tablet.png'
                  />
                  <img
                    src='./src/assets/catalog-1-mobile.png'
                    alt='Фото товара'
                  />
                </picture>
              </div>
              <div className='catalog__item-description'>
                <p className='catalog__item-text'>Cat Energy PRO 1000 г</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Объем</td>
                      <td>1000 г</td>
                    </tr>
                    <tr>
                      <td>Вкус</td>
                      <td>Курица</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>1000 Р.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='catalog-item__button button'>Заказать</button>
            </li>
            <li className='catalog__item'>
              <div className='catalog__item-image'>
                <picture>
                  <source
                    media='(min-width: 768px)'
                    srcSet='./src/assets/catalog-3-tablet.png'
                  />
                  <img
                    src='./src/assets/catalog-1-mobile.png'
                    alt='Фото товара'
                  />
                </picture>
              </div>
              <div className='catalog__item-description'>
                <p className='catalog__item-text'>Cat Energy PRO 500 г</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Объем</td>
                      <td>500 г</td>
                    </tr>
                    <tr>
                      <td>Вкус</td>
                      <td>Рыба</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>700 Р.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='catalog-item__button button'>Заказать</button>
            </li>
            <li className='catalog__item'>
              <div className='catalog__item-image'>
                <picture>
                  <source
                    media='(min-width: 768px)'
                    srcSet='./src/assets/catalog-4-tablet.png'
                  />
                  <img
                    src='./src/assets/catalog-1-mobile.png'
                    alt='Фото товара'
                  />
                </picture>
              </div>
              <div className='catalog__item-description'>
                <p className='catalog__item-text'>Cat Energy PRO 1000 г</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Объем</td>
                      <td>1000 г</td>
                    </tr>
                    <tr>
                      <td>Вкус</td>
                      <td>Рыба</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>1000 Р.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='catalog-item__button button'>Заказать</button>
            </li>
            <li className='catalog__item'>
              <div className='catalog__item-image'>
                <picture>
                  <source
                    media='(min-width: 768px)'
                    srcSet='./src/assets/catalog-5-tablet.png'
                  />
                  <img
                    src='./src/assets/catalog-1-mobile.png'
                    alt='Фото товара'
                  />
                </picture>
              </div>
              <div className='catalog__item-description'>
                <p className='catalog__item-text'>Cat Energy PRO 500 г</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Объем</td>
                      <td>500 г</td>
                    </tr>
                    <tr>
                      <td>Вкус</td>
                      <td>Гречка</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>400 Р.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='catalog-item__button button'>Заказать</button>
            </li>
            <li className='catalog__item'>
              <div className='catalog__item-image'>
                <picture>
                  <source
                    media='(min-width: 768px)'
                    srcSet='./src/assets/catalog-6-tablet.png'
                  />
                  <img
                    src='./src/assets/catalog-1-mobile.png'
                    alt='Фото товара'
                  />
                </picture>
              </div>
              <div className='catalog__item-description'>
                <p className='catalog__item-text'>Cat Energy PRO 1000 г</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Объем</td>
                      <td>1000 г</td>
                    </tr>
                    <tr>
                      <td>Вкус</td>
                      <td>Гречка</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>700 Р.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='catalog-item__button button'>Заказать</button>
            </li>
            <li className='catalog__item'>
              <div className='catalog__item-image'>
                <picture>
                  <source
                    media='(min-width: 768px)'
                    srcSet='./src/assets/catalog-7-tablet.png'
                  />
                  <img
                    src='./src/assets/catalog-1-mobile.png'
                    alt='Фото товара'
                  />
                </picture>
              </div>
              <div className='catalog__item-description'>
                <p className='catalog__item-text'>Cat Energy PRO 500 г</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Объем</td>
                      <td>500 г</td>
                    </tr>
                    <tr>
                      <td>Вкус</td>
                      <td>Рис</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>500 Р.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='catalog-item__button button'>Заказать</button>
            </li>
            <li className='catalog__item'>
              <div className='page-secondary__catalog-more'>
                <h3 className='catalog-more__title'>
                  Показать еще 100500 товаров
                </h3>
                <p className='catalog-more__text'>
                  На самом деле вкусов гораздо больше!
                </p>
                <button className='catalog-more__button button button--grey'>
                  Показать все
                </button>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <section className='catalog-advance'>
        <div className='catalog-advance__wrapper'>
          <h2 className='catalog-advance__title'>Дополнительные товары</h2>
          <ul className='catalog-advance__list advance__list'>
            <li className='advance__item'>
              <h4 className='advance__item-title'>Сахарозаменитель</h4>
              <p className='advance__item-description'>1 упаковка (100 г)</p>
              <p className='advance__item-price'>100 Р.</p>
              <button className='advance__item-button button'>Заказать</button>
            </li>
            <li className='advance__item'>
              <h4 className='advance__item-title'>Питьевая вода</h4>
              <p className='advance__item-description'>5 литров</p>
              <p className='advance__item-price'>50 Р.</p>
              <button className='advance__item-button button'>Заказать</button>
            </li>
            <li className='advance__item'>
              <h4 className='advance__item-title'>Молоко</h4>
              <p className='advance__item-description'>1 литр</p>
              <p className='advance__item-price'>100 Р.</p>
              <button className='advance__item-button button'>Заказать</button>
            </li>
            <li className='advance__item'>
              <h4 className='advance__item-title'>Витамины</h4>
              <p className='advance__item-description'>1 упаковка (30 г)</p>
              <p className='advance__item-price'>300 Р.</p>
              <button className='advance__item-button button'>Заказать</button>
            </li>
          </ul>
          <div className='catalog-advance__gift'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.75 3.75C3.75 4.594 4.029 5.373 4.5 6H2.75C2.28587 6 1.84075 6.18437 1.51256 6.51256C1.18437 6.84075 1 7.28587 1 7.75V10.25C1 10.948 1.409 11.55 2 11.832V20.25C2 21.216 2.784 22 3.75 22H20.25C20.7141 22 21.1592 21.8156 21.4874 21.4874C21.8156 21.1592 22 20.7141 22 20.25V11.832C22.591 11.551 23 10.948 23 10.25V7.75C23 7.28587 22.8156 6.84075 22.4874 6.51256C22.1592 6.18437 21.7141 6 21.25 6H19.5C19.9179 5.44286 20.1723 4.78038 20.2348 4.08677C20.2974 3.39317 20.1655 2.69585 19.8541 2.07295C19.5427 1.45005 19.0639 0.926189 18.4715 0.560059C17.8791 0.19393 17.1964 0 16.5 0C15.044 0 13.064 0.901 12 3.11C10.936 0.901 8.955 0 7.5 0C6.50544 0 5.55161 0.395088 4.84835 1.09835C4.14509 1.80161 3.75 2.75544 3.75 3.75V3.75ZM11.22 6C10.933 2.507 8.65 1.5 7.5 1.5C6.90326 1.5 6.33097 1.73705 5.90901 2.15901C5.48705 2.58097 5.25 3.15326 5.25 3.75C5.25 4.34674 5.48705 4.91903 5.90901 5.34099C6.33097 5.76295 6.90326 6 7.5 6H11.22ZM20.5 12V20.25C20.5 20.3163 20.4737 20.3799 20.4268 20.4268C20.3799 20.4737 20.3163 20.5 20.25 20.5H12.75V12H20.5ZM11.25 20.5V12H3.5V20.25C3.5 20.388 3.612 20.5 3.75 20.5H11.25ZM21.25 10.5C21.3163 10.5 21.3799 10.4737 21.4268 10.4268C21.4737 10.3799 21.5 10.3163 21.5 10.25V7.75C21.5 7.6837 21.4737 7.62011 21.4268 7.57322C21.3799 7.52634 21.3163 7.5 21.25 7.5H12.75V10.5H21.25ZM2.75 10.5H11.25V7.5H2.75C2.6837 7.5 2.62011 7.52634 2.57322 7.57322C2.52634 7.62011 2.5 7.6837 2.5 7.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5ZM18.75 3.75C18.75 4.34674 18.5129 4.91903 18.091 5.34099C17.669 5.76295 17.0967 6 16.5 6H12.78C13.067 2.507 15.35 1.5 16.5 1.5C17.0967 1.5 17.669 1.73705 18.091 2.15901C18.5129 2.58097 18.75 3.15326 18.75 3.75V3.75Z'
                fill='black'
              />
            </svg>

            <p className='catalog-advance__gift-text'>
              Закажите все и получите чехол для кота в подарок!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
