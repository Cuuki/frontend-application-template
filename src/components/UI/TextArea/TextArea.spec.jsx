import React from 'react';
import {render} from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  it('renders with default empty value and valid state', () => {
    const {container} = render(
      <TextArea id="textField" handleChange={() => {}} />,
    );

    expect(container.firstChild).toHaveValue('');
    expect(container.firstChild).toHaveAttribute('aria-invalid', 'false');
  });

  it('renders with value and invalid state', () => {
    const {container} = render(
      <TextArea
        id="textField"
        isValid={false}
        initialValue="value"
        handleChange={() => {}}
      />,
    );

    expect(container.firstChild).toHaveValue('value');
    expect(container.firstChild).toHaveAttribute('aria-invalid', 'true');
  });
});
