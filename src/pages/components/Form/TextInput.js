import { useField } from 'formik';
import React from 'react';

const TextInput = ({ label, as, ...props }) => {
  const [field, meta] = useField(props);
  let myInput = (
    <>
      <label className='text-label' htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className='text-input text-input--error'
        type='text'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='form_error'>{meta.error}</div>
      ) : null}
    </>
  );

  if (as === 'textarea') {
    myInput = <textarea type='text' {...field} {...props} />;
  }
  return myInput;
};

export default TextInput;
