import React from 'react';
import PropTypes from 'prop-types';
import {FormLabelRequiredStyled, FormLabelStyled} from './FormLabel.styles';

const FormLabel = ({describes, isRequired, as, children}) => {
  const Component = as;

  return (
    <Component htmlFor={describes}>
      {children}
      {isRequired && <FormLabelRequiredStyled>*</FormLabelRequiredStyled>}
    </Component>
  );
};

FormLabel.propTypes = {
  describes: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
FormLabel.defaultProps = {
  isRequired: false,
  as: FormLabelStyled,
};

export default FormLabel;
