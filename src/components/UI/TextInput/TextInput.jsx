import React from 'react';
import PropTypes from 'prop-types';
import {TextInputStyled} from './TextInput.styles';

const TextInput = ({
  id,
  type,
  initialValue,
  isValid,
  isRequired,
  handleChange,
  minLength,
  pattern,
}) => (
  <TextInputStyled
    id={id}
    type={type}
    value={initialValue}
    aria-invalid={(!isValid).toString()}
    required={isRequired}
    onChange={handleChange}
    {...(!!minLength && {minLength: minLength})}
    {...(!!pattern && {pattern})}
  />
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  initialValue: PropTypes.string,
  isValid: PropTypes.bool,
  isRequired: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
};
TextInput.defaultProps = {
  type: 'text',
  initialValue: '',
  isValid: true,
  isRequired: false,
  minLength: 0,
  pattern: '',
};

export default TextInput;
