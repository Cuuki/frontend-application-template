import React from 'react';
import PropTypes from 'prop-types';
import {TextAreaStyled} from './TextArea.styles';

const TextArea = ({id, initialValue, isValid, isRequired, handleChange}) => (
  <TextAreaStyled
    id={id}
    value={initialValue}
    isValid={isValid}
    aria-invalid={(!isValid).toString()}
    required={isRequired}
    onChange={handleChange}
  />
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  isValid: PropTypes.bool,
  isRequired: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
TextArea.defaultProps = {
  initialValue: '',
  isValid: true,
  isRequired: false,
};

export default TextArea;
