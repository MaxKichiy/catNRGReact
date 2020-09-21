import { useField } from 'formik';
import React from 'react';

const CheckInput = ({ label, as, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input type='checkbox' {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>
    </>
  );
};

export default CheckInput;
