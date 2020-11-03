import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyled} from './Button.styles';

const Button = ({variant, type, fullWidth, isDisabled, children}) => (
  <ButtonStyled
    type={type}
    variant={variant}
    fullWidth={fullWidth}
    disabled={isDisabled}
  >
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  fullWidth: false,
  isDisabled: false,
};

export default Button;
