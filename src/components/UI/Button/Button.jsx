import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyled} from './Button.styles';

const Button = ({variant, type, fullWidth, children}) => (
  <ButtonStyled variant={variant} fullWidth={fullWidth} type={type}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  fullWidth: false,
};

export default Button;
