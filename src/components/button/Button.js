import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, onClick, text, ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} onClick={onClick} {...rest}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  text: '',
};

export default Button;
