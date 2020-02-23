import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(({
  type, onClick, text, className,
}, ref) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} onClick={onClick} className={className} ref={ref}>
    {text}
  </button>
));

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: '',
  className: 'btn',
};

export default Button;
