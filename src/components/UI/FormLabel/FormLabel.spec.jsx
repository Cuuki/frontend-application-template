import React from 'react';
import {render} from '@testing-library/react';
import FormLabel from './FormLabel';

describe('FormLabel', () => {
  it('renders with for attribute and children', () => {
    const {getByText} = render(
      <FormLabel describes="fieldId">Label text</FormLabel>,
    );

    expect(getByText('Label text')).toHaveAttribute('for', 'fieldId');
  });
});
