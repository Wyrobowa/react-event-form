import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, msg, children }) => (
  <div className={`alert alert-${type}`}>
    <h4 className="alert-heading">{msg}</h4>
    {children}
  </div>
);

Alert.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  msg: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Alert.defaultProps = {
  type: 'primary',
  children: '',
};

export default Alert;
