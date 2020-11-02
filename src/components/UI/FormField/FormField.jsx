import React from 'react';
import PropTypes from 'prop-types';
import {FormFieldMessageStyled, FormFieldStyled} from './FormField.styles';

const TextInput = ({isValid, message, labelComponent, children}) => (
  <FormFieldStyled>
    {labelComponent}
    {children}
    {!!message && (
      <FormFieldMessageStyled isValid={isValid}>
        {message}
      </FormFieldMessageStyled>
    )}
  </FormFieldStyled>
);

TextInput.propTypes = {
  isValid: PropTypes.bool,
  message: PropTypes.string,
  labelComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
TextInput.defaultProps = {
  isValid: true,
  message: '',
};

export default TextInput;
