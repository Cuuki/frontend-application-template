import React from 'react';
import PropTypes from 'prop-types';
import {FormLabelStyled} from './FormLabel.styles';

const FormLabel = ({describes, children}) => (
  <FormLabelStyled htmlFor={describes}>{children}</FormLabelStyled>
);

FormLabel.propTypes = {
  describes: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormLabel;
