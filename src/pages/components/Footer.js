import React from 'react';

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='page-footer__wrapper--top'>
        <h3 className='page-footer__title'>
          приглашаем к сотрудничеству дилеров!
        </h3>
        <p className='page-footer__adress'>
          ул. Большая Конюшенная, д. 19/8 Санкт-Петербург
        </p>
      </div>
      <div className='page-footer__wrapper--bottom'>
        <div className='page-footer__map'>
          <picture>
            <source
              media='(min-width: 1220px)'
              srcSet='./src/assets/map-desktop.png'
            />
            <source
              media='(min-width: 768px)'
              srcSet='./src/assets/map-tablet.png'
            />
            <img
              className='footer-map'
              src='./src/assets/map_mobile.png'
              width='320'
              height='365'
              alt='адресс магазина'
            />
          </picture>
        </div>
        <div className='page-footer__logo'>
          <img
            src='./src/assets/footer-logo.png'
            alt='Логотип внизу страницы'
            className='footer__logo'
          />
        </div>
        <ul className='page-footer__socials social__list'>
          <li className='social__list-item'>
            <a href='vk.com' className='social__list-link'>
              <svg
                width='24'
                height='17'
                viewBox='0 0 16 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.046875 1.875C0.046875 1.34375 0.348958 1.05729 0.953125 1.01562L3.28125 1.03125C3.4375 1.03125 3.54167 1.10938 3.59375 1.26562C3.83333 2.04688 4.10156 2.72135 4.39844 3.28906C4.69531 3.85677 5.08333 4.51042 5.5625 5.25C5.60417 5.34375 5.67188 5.39062 5.76562 5.39062C5.83854 5.39062 5.89583 5.35417 5.9375 5.28125L5.98438 5.10938L6 2.40625C6 2.21875 5.95573 2.09375 5.86719 2.03125C5.77865 1.96875 5.61458 1.92188 5.375 1.89062C5.1875 1.85938 5.09375 1.74479 5.09375 1.54688C5.09375 1.50521 5.09896 1.47396 5.10938 1.45312C5.32812 0.776042 5.95312 0.4375 6.98438 0.4375L7.85938 0.421875C8.25521 0.421875 8.58333 0.520833 8.84375 0.71875C9.10417 0.916667 9.23438 1.22917 9.23438 1.65625V5.20312C9.30729 5.25521 9.375 5.28125 9.4375 5.28125C9.59375 5.28125 9.72917 5.1875 9.84375 5C10.9896 3.39583 11.6094 2.32292 11.7031 1.78125C11.7031 1.77083 11.7135 1.74479 11.7344 1.70312C11.8073 1.54688 11.9271 1.41146 12.0938 1.29688C12.2604 1.18229 12.4062 1.10417 12.5312 1.0625C12.5729 1.04167 12.6198 1.03125 12.6719 1.03125H15.0938L15.25 1.04688C15.4583 1.04688 15.6198 1.14583 15.7344 1.34375C15.776 1.40625 15.8047 1.47396 15.8203 1.54688C15.8359 1.61979 15.8464 1.69271 15.8516 1.76562C15.8568 1.83854 15.8594 1.88021 15.8594 1.89062V2C15.7865 2.42708 15.6016 2.88281 15.3047 3.36719C15.0078 3.85156 14.6302 4.375 14.1719 4.9375C13.7135 5.5 13.4271 5.86979 13.3125 6.04688C13.2188 6.17188 13.1719 6.28646 13.1719 6.39062C13.1719 6.47396 13.2135 6.56771 13.2969 6.67188L15.5781 9.54688C15.7031 9.71354 15.7656 9.89583 15.7656 10.0938C15.7656 10.3333 15.6719 10.5312 15.4844 10.6875C15.2969 10.8438 15.0729 10.9323 14.8125 10.9531L14.5469 10.9688H12.1719C12.1615 10.9688 12.1406 10.9714 12.1094 10.9766C12.0781 10.9818 12.0573 10.9844 12.0469 10.9844C11.8177 10.9844 11.6042 10.8854 11.4062 10.6875C11.3333 10.6042 10.8438 9.98958 9.9375 8.84375C9.88542 8.77083 9.8125 8.70312 9.71875 8.64062C9.67708 8.80729 9.6224 9.04688 9.55469 9.35938C9.48698 9.67188 9.4375 9.89583 9.40625 10.0312L9.35938 10.2969C9.25521 10.6615 9.03646 10.8802 8.70312 10.9531L8.48438 10.9688H6.95312C6.08854 10.9688 5.22656 10.5729 4.36719 9.78125C3.50781 8.98958 2.73438 7.96615 2.04688 6.71094C1.35938 5.45573 0.71875 3.99479 0.125 2.32812C0.0729167 2.19271 0.046875 2.04167 0.046875 1.875ZM9.4375 5.92188C9.21875 5.92188 9.02083 5.86198 8.84375 5.74219C8.66667 5.6224 8.57812 5.45833 8.57812 5.25V1.65625C8.57812 1.44792 8.52604 1.29948 8.42188 1.21094C8.31771 1.1224 8.13542 1.07812 7.875 1.07812L6.98438 1.10938C6.53646 1.10938 6.19792 1.1875 5.96875 1.34375C6.42708 1.5625 6.65625 1.91667 6.65625 2.40625V5.15625C6.63542 5.41667 6.53125 5.63281 6.34375 5.80469C6.15625 5.97656 5.94792 6.0625 5.71875 6.0625C5.40625 6.0625 5.16667 5.91146 5 5.60938C4.1875 4.38021 3.58333 3.21354 3.1875 2.10938L3.04688 1.70312L0.96875 1.6875C0.833333 1.6875 0.757812 1.69531 0.742188 1.71094C0.726562 1.72656 0.71875 1.77083 0.71875 1.84375C0.71875 1.9375 0.729167 2.03646 0.75 2.14062L1.07812 3.01562C1.95312 5.27604 2.90365 7.05729 3.92969 8.35938C4.95573 9.66146 5.96354 10.3125 6.95312 10.3125H8.51562C8.57812 10.3125 8.625 10.2943 8.65625 10.2578C8.6875 10.2214 8.71354 10.151 8.73438 10.0469L8.76562 9.89062L9.0625 8.51562C9.14583 8.32812 9.21875 8.20312 9.28125 8.14062C9.39583 8.02604 9.53125 7.96875 9.6875 7.96875C9.9375 7.96875 10.1927 8.11979 10.4531 8.42188L11.7812 10.1094C11.8646 10.2448 11.9531 10.3125 12.0469 10.3125H14.625C14.9375 10.3125 15.0938 10.2344 15.0938 10.0781C15.0938 10.026 15.0781 9.97396 15.0469 9.92188L12.7812 7.09375C12.6042 6.875 12.5156 6.64062 12.5156 6.39062C12.5156 6.14062 12.599 5.90104 12.7656 5.67188C12.901 5.46354 13.1641 5.11719 13.5547 4.63281C13.9453 4.14844 14.2865 3.69531 14.5781 3.27344C14.8698 2.85156 15.0625 2.46875 15.1562 2.125L15.2031 1.92188C15.1927 1.90104 15.1875 1.86719 15.1875 1.82031C15.1875 1.77344 15.1823 1.73438 15.1719 1.70312H12.7188C12.5625 1.76562 12.4375 1.85938 12.3438 1.98438L12.25 2.28125C11.9896 3 11.3073 4.10938 10.2031 5.60938C9.98438 5.81771 9.72917 5.92188 9.4375 5.92188Z'
                  fill='black'
                />
              </svg>
            </a>
          </li>
          <li className='social__list-item'>
            <a href='instagram.com' className='social__list-link'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.7 8C10.7 6.5 9.5 5.3 8 5.3C6.5 5.3 5.3 6.5 5.3 8C5.3 9.5 6.5 10.7 8 10.7C9.5 10.7 10.7 9.5 10.7 8ZM12.1 8C12.1 10.3 10.3 12.1 8 12.1C5.7 12.1 3.9 10.3 3.9 8C3.9 5.7 5.7 3.9 8 3.9C10.3 3.9 12.1 5.7 12.1 8ZM13.2 3.7C13.2 4.3 12.8 4.7 12.2 4.7C11.6 4.7 11.2 4.3 11.2 3.7C11.2 3.1 11.6 2.7 12.2 2.7C12.8 2.7 13.2 3.2 13.2 3.7ZM8 1.4C6.8 1.4 4.3 1.3 3.3 1.7C2.6 2 2 2.6 1.8 3.3C1.4 4.3 1.5 6.8 1.5 8C1.5 9.2 1.4 11.7 1.8 12.7C2 13.4 2.6 14 3.3 14.2C4.3 14.6 6.9 14.5 8 14.5C9.1 14.5 11.7 14.6 12.7 14.2C13.4 13.9 13.9 13.4 14.2 12.7C14.6 11.6 14.5 9.1 14.5 8C14.5 6.9 14.6 4.3 14.2 3.3C14 2.6 13.4 2 12.7 1.8C11.7 1.3 9.2 1.4 8 1.4ZM16 8V11.3C16 12.5 15.6 13.7 14.7 14.7C13.8 15.6 12.6 16 11.3 16H4.7C3.5 16 2.3 15.6 1.3 14.7C0.5 13.8 0 12.6 0 11.3V8V4.7C0 3.4 0.5 2.2 1.3 1.3C2.3 0.5 3.5 0 4.7 0H11.3C12.5 0 13.7 0.4 14.7 1.3C15.5 2.2 16 3.4 16 4.7V8Z'
                  fill='black'
                />
              </svg>
            </a>
          </li>
          <li className='social__list-item'>
            <a href='fb.com' className='social__list-link'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className='footer__title--bottom'>
          <p className='footer__title-text--bottom'>HTML Academy</p>
          <img src='' alt='' className='footer__title-image' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;