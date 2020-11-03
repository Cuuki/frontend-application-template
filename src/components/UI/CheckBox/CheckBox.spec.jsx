import React from 'react';
import {render} from '@testing-library/react';
import CheckBox from './CheckBox';

describe('CheckBox', () => {
  it('renders with default checked state', () => {
    const {getByLabelText} = render(
      <CheckBox id="fieldId" label="Label text" handleChange={() => {}} />,
    );

    expect(getByLabelText('Label text')).not.toHaveAttribute('checked');
  });

  it('renders with checked state true', () => {
    const {getByLabelText} = render(
      <CheckBox
        id="fieldId"
        label="Label text"
        isChecked
        handleChange={() => {}}
      />,
    );

    expect(getByLabelText('Label text')).toHaveAttribute('checked');
  });
});
