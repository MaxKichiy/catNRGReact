import { Formik, Form } from 'formik';
import React from 'react';
import classNames from 'classnames';
import * as Yup from 'yup';
import CheckInput from './components/Form/CheckInput';
import RadioInput from './components/Form/RadioInput';
import TextInput from './components/Form/TextInput';
import { sendOrder } from '../redux/actions/setOrder';
import { useDispatch } from 'react-redux';

function FormPage() {
  const dispatch = useDispatch();
  return (
    <>
      <main className='page-third'>
        <div className='page-third__wrapper'>
          <h1 className='page-third__title'>Подбор программы</h1>
          <p className='page-third__text'>
            Заполните анкету и мы подберем программу питания для вашего кота
          </p>
          <Formik
            initialValues={{
              name: '',
              weight: '',
              years: '',
              programType: {
                slim: false,
                mass: false,
                idk: true,
              },
              email: '',
              phone: '',
              comment: '',
              additions: {
                sugar: false,
                water: false,
                milk: false,
                vitamins: false,
              },
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Обязательное поле'),
              weight: Yup.number().required('Обязательное поле'),
              email: Yup.string()
                .required('Обязательное поле')
                .email('Не верный email адресс'),
              phone: Yup.number().required('Обязательное поле'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              dispatch(sendOrder(values, resetForm));
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <Form className='page-third__form form'>
                <div className='form-third'>
                  <div className='form__third-input'>
                    <TextInput name='name' label='Имя:*' placeholder='БАРСИК' />
                  </div>
                  <div className='form__third-input'>
                    <TextInput
                      name='weight'
                      label='Вес(КГ):*'
                      placeholder='7'
                    />
                  </div>
                  <div className='form__third-input'>
                    <TextInput
                      name='years'
                      label='Возраст(ЛЕТ):'
                      placeholder='7'
                    />
                  </div>
                </div>
                <div className='form__radio'>
                  <RadioInput
                    label='Похудение'
                    type='radio'
                    value='slim'
                    name='programType'
                    id='slim'
                  />
                  <RadioInput
                    label='Набор массы'
                    type='radio'
                    value='mass'
                    name='programType'
                    id='mass'
                  />
                  <RadioInput
                    label='Не знаю (Нужен ваш совет)'
                    type='radio'
                    value='idk'
                    name='programType'
                    id='idk'
                  />
                </div>
                <div className='form__contact'>
                  <h2 className='form__contact-title'>
                    Контактные данные (владельца кота)
                  </h2>
                  <div className='form__contact-input'>
                    <TextInput
                      name='email'
                      label='E-mail:*'
                      placeholder='KUKLACHEV@GMAIL.COM'
                    />
                  </div>
                  <div className='form__contact-input'>
                    <TextInput
                      name='phone'
                      label='Телефон:*'
                      placeholder='8 (960) 900-60-90'
                    />
                  </div>
                </div>
                <div className='form__comment'>
                  <h2 className='form__comment-title'>Комментарий</h2>

                  <TextInput
                    className='text-input'
                    as='textarea'
                    name='comment'
                    id='comment'
                    cols='30'
                    rows='10'
                    placeholder='Расскажите обо всех повадках кота'
                  />
                </div>
                <div className='form__addition'>
                  <h2 className='form__addition-title'>Дополнительно</h2>

                  <div className='form__addition-input'>
                    <CheckInput
                      label='Сахарозаменитель'
                      id='sugar'
                      name='additions.sugar'
                      type='checkbox'
                    />
                  </div>
                  <div className='form__addition-input'>
                    <CheckInput
                      label='Питьевая вода'
                      name='additions.water'
                      id='water'
                      type='checkbox'
                    />
                  </div>
                  <div className='form__addition-input'>
                    <CheckInput
                      label='Молоко'
                      id='milk'
                      name='additions.milk'
                      type='checkbox'
                    />
                  </div>
                  <div className='form__addition-input'>
                    <CheckInput
                      label='Витамины'
                      id='vitamins'
                      name='additions.vitamins'
                      type='checkbox'
                    />
                  </div>
                </div>
                <div className='form__bottom'>
                  <button
                    type='submit'
                    className={classNames('form__button', 'button', {
                      'button--disable': formik.isSubmitting || !formik.dirty,
                    })}
                  >
                    Отправить заявку
                  </button>
                  <p className='form__asterisk'>* — Обязательные поля</p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}

export default FormPage;
