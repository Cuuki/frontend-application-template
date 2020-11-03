import React from 'react';
import PropTypes from 'prop-types';
import {FormStyled} from './Form.styles';

const Form = ({handleSubmit, children}) => (
  <FormStyled onSubmit={handleSubmit}>{children}</FormStyled>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
Form.defaultProps = {};

export default Form;
