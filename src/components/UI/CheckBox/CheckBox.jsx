import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckboxContainerStyled,
  CheckboxLabelStyled,
  CheckboxStyled,
} from './Checkbox.styles';
import FormLabel from '../FormLabel';

const CheckBox = ({id, label, isChecked, handleChange}) => (
  <CheckboxContainerStyled>
    <CheckboxStyled
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={handleChange}
    />
    <FormLabel describes={id} as={CheckboxLabelStyled}>
      {label}
    </FormLabel>
  </CheckboxContainerStyled>
);

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
CheckBox.defaultProps = {
  isChecked: false,
};

export default CheckBox;
