import React from 'react';
import PropTypes from 'prop-types';
import {FormLabelStyled} from './FormLabel.styles';

const FormLabel = ({describes, as, children}) => {
  const Component = as;

  return <Component htmlFor={describes}>{children}</Component>;
};

FormLabel.propTypes = {
  describes: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
FormLabel.defaultProps = {
  as: FormLabelStyled,
};

export default FormLabel;
