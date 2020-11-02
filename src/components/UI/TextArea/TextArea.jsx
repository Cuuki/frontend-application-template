import React from 'react';
import PropTypes from 'prop-types';
import {TextAreaStyled} from './TextArea.styles';

const TextArea = ({id, initialValue, isValid, handleChange}) => (
  <TextAreaStyled
    id={id}
    value={initialValue}
    aria-invalid={(!isValid).toString()}
    onChange={handleChange}
  />
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  isValid: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
TextArea.defaultProps = {
  initialValue: '',
  isValid: true,
};

export default TextArea;
