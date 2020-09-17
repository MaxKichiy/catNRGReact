import React from 'react';

function Form() {
  return (
    <>
      <main className='page-third'>
        <div className='page-third__wrapper'>
          <h1 className='page-third__title'>Подбор программы</h1>
          <p className='page-third__text'>
            Заполните анкету и мы подберем программу питания для вашего кота
          </p>
          <form action='submit' className='page-third__form form'>
            <div className='form-third'>
              <div className='form__third-input'>
                <label className='text-label' htmlFor='name'>
                  Имя:*
                </label>
                <input
                  className='text-input text-input--error'
                  type='text'
                  placeholder='БАРСИК'
                />
              </div>
              <div className='form__third-input'>
                <label htmlFor='name'>Вес(КГ):*</label>
                <input
                  className='text-input text-input--error'
                  type='text'
                  placeholder='7'
                />
              </div>
              <div className='form__third-input'>
                <label htmlFor='name'>Возраст(ЛЕТ):</label>
                <input
                  className='text-input text-input--error'
                  type='text'
                  placeholder='7'
                />
              </div>
            </div>

            <div className='form__radio'>
              <div className='form__radio-input'>
                <input type='radio' name='program' id='skinny' />
                <label htmlFor='skinny'>Похудение</label>
              </div>
              <div className='form__radio-input'>
                <input id='mass' name='program' type='radio' />
                <label htmlFor='mass'>Набор массы</label>
              </div>
              <div className='form__radio-input'>
                <input name='program' type='radio' id='advice' />
                <label htmlFor='advice'>Не знаю (Нужен ваш совет)</label>
              </div>
            </div>

            <div className='form__contact'>
              <h2 className='form__contact-title'>
                Контактные данные (владельца кота)
              </h2>
              <div className='form__contact-input'>
                <label htmlFor='email'>E-mail:*</label>
                <input
                  className='text-input'
                  name='email'
                  type='email'
                  placeholder='kuklachev@gmail.com'
                />
                <svg
                  width='26'
                  height='20'
                  viewBox='0 0 16 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.75012 0C1.28599 0 0.840873 0.184375 0.512685 0.512563C0.184496 0.840752 0.00012151 1.28587 0.00012151 1.75L0.00012151 2.486C-4.05033e-05 2.495 -4.05033e-05 2.504 0.00012151 2.513L0.00012151 10.25C0.00012151 11.216 0.784121 12 1.75012 12H14.2501C14.7142 12 15.1594 11.8156 15.4876 11.4874C15.8157 11.1592 16.0001 10.7141 16.0001 10.25V1.75C16.0001 1.28587 15.8157 0.840752 15.4876 0.512563C15.1594 0.184375 14.7142 0 14.2501 0H1.75012ZM14.5001 2.07V1.75C14.5001 1.6837 14.4738 1.62011 14.4269 1.57322C14.38 1.52634 14.3164 1.5 14.2501 1.5H1.75012C1.68382 1.5 1.62023 1.52634 1.57334 1.57322C1.52646 1.62011 1.50012 1.6837 1.50012 1.75V2.07L8.00012 5.88L14.5001 2.07ZM1.50012 3.81V10.251C1.50012 10.389 1.61212 10.501 1.75012 10.501H14.2501C14.3164 10.501 14.38 10.4747 14.4269 10.4278C14.4738 10.3809 14.5001 10.3173 14.5001 10.251V3.809L8.38012 7.397C8.26493 7.4647 8.13374 7.50039 8.00012 7.50039C7.86651 7.50039 7.73532 7.4647 7.62012 7.397L1.50012 3.809V3.81Z'
                    fill='black'
                  />
                </svg>
              </div>
              <div className='form__contact-input'>
                <label htmlFor='tel'>Телефон:*</label>
                <input
                  className='text-input'
                  type='tel'
                  name='tel'
                  placeholder='8 (960) 900-60-90'
                />
                <svg
                  width='33'
                  height='32'
                  viewBox='0 0 33 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M27.3137 20.249L31.5564 16.0063L27.3137 11.7637'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M21.6567 16.0063H31.5562'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.592 26.5563L17.4707 28.6777C17.2746 28.8754 17.0393 29.03 16.78 29.1315C16.5206 29.2331 16.243 29.2793 15.9647 29.2674C15.6865 29.2554 15.4138 29.1854 15.1641 29.0619C14.9145 28.9385 14.6934 28.7642 14.515 28.5504C12.5755 26.1381 11.229 23.3045 10.5835 20.2772C9.96064 17.4831 9.96064 14.5861 10.5835 11.792C11.2332 8.75223 12.5897 5.90829 14.5433 3.49052C14.7211 3.27731 14.9415 3.10348 15.1902 2.98008C15.4389 2.85668 15.7106 2.78643 15.988 2.77379C16.2654 2.76115 16.5423 2.80641 16.8013 2.90667C17.0602 3.00694 17.2954 3.16002 17.4919 3.35617L19.6132 5.47749C19.9598 5.81728 20.1709 6.27148 20.2074 6.75544C20.2438 7.2394 20.103 7.7201 19.8112 8.10793C19.2219 8.87634 18.7214 9.70894 18.3192 10.5899C18.1613 10.9381 17.9068 11.2337 17.586 11.4418C17.2651 11.6498 16.8914 11.7615 16.509 11.7637H14.713C13.9493 14.5406 13.9493 17.4721 14.713 20.249H16.509C16.8914 20.2511 17.2651 20.3628 17.586 20.5708C17.9068 20.7789 18.1613 21.0745 18.3192 21.4227C18.7214 22.3037 19.2219 23.1363 19.8112 23.9047C20.1063 24.2966 20.2469 24.7834 20.2065 25.2723C20.1661 25.7612 19.9474 26.2182 19.592 26.5563Z'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div className='form__comment'>
              <h2 className='form__comment-title'>Комментарий</h2>
              <textarea
                className='text-input'
                name='comment'
                id='comment'
                cols='30'
                rows='10'
                placeholder='Расскажите обо всех повадках кота'
              ></textarea>
            </div>
            <div className='form__addition'>
              <h2 className='form__addition-title'>Дополнительно</h2>
              <div className='form__addition-input'>
                <input id='sugar' name='sugar' type='checkbox' />
                <label htmlFor='sugar'>Сахарозаменитель</label>
              </div>
              <div className='form__addition-input'>
                <input id='water' name='water' type='checkbox' />
                <label htmlFor='water'>Питьевая вода</label>
              </div>
              <div className='form__addition-input'>
                <input id='milk' name='milk' type='checkbox' />
                <label htmlFor='milk'>Молоко</label>
              </div>
              <div className='form__addition-input'>
                <input id='vitamins' name='vitamins' type='checkbox' />
                <label htmlFor='vitamins'>Витамины</label>
              </div>
            </div>
            <div className='form__bottom'>
              <button className='form__button button'>Отправить заявку</button>
              <p className='form__asterisk'>* — Обязательные поля</p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Form;
