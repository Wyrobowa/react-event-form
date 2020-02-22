/* eslint react/jsx-props-no-spreading: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const InputFormField = ({
  id, label, value, type, onChange, ...rest
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      className="form-control"
      id={id}
      name={id}
      value={value || ''}
      type={type}
      onChange={onChange}
      {...rest}
    />
  </div>
);

InputFormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  type: PropTypes.oneOf(['text', 'email', 'date']),
  onChange: PropTypes.func.isRequired,
};

InputFormField.defaultProps = {
  value: '',
  type: 'text',
};

export default InputFormField;
