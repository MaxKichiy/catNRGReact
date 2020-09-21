import { useField } from 'formik';
import React from 'react';

const RadioInput = ({ label, as, ...props }) => {
  const [field, meta] = useField(props);
  const myRadioInput = (
    <div className='form__radio-input'>
      <input type='radio' {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>
    </div>
  );
  return myRadioInput;
};

export default RadioInput;
