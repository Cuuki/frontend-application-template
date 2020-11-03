import React from 'react';
import {render} from '@testing-library/react';
import FormField from './FormField';
import FormLabel from '../FormLabel';

describe('FormField', () => {
  it('renders with message and label', () => {
    const {getByText} = render(
      <FormField
        message="Field message"
        labelComponent={<FormLabel describes={'fieldId'}>Label text</FormLabel>}
      >
        <input type="text" id="fieldId" />
      </FormField>,
    );

    expect(getByText('Field message')).toBeInTheDocument();
    expect(getByText('Label text')).toBeInTheDocument();
  });
});
