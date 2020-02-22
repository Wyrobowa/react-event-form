import React from 'react';
import validate from 'validate.js';
import PropTypes from 'prop-types';

const Validator = (WrappedComponent) => ({
  type,
  value,
  setFormIsValid,
  ...rest
}) => {
  const checkValidation = () => {
    setFormIsValid(!validate.isEmpty(value));

    if (type === 'text') {
      validate.isEmpty(value);
    }
  };

  return (
    <WrappedComponent onBlur={checkValidation} type={type} value={value} {...rest} />
  );
};

export default Validator;
