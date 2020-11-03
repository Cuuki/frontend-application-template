import React from 'react';
import {render} from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders with default attributes and valid state', () => {
    const {container} = render(
      <TextInput id="textField" handleChange={() => {}} />,
    );

    expect(container.firstChild).toHaveValue('');
    expect(container.firstChild).toHaveAttribute('type', 'text');
    expect(container.firstChild).toHaveAttribute('aria-invalid', 'false');
    expect(container.firstChild).not.toHaveAttribute('minlength', '');
    expect(container.firstChild).not.toHaveAttribute('pattern', '');
  });

  it('renders with value, attributes and invalid state', () => {
    const {container} = render(
      <TextInput
        id="textField"
        type="password"
        isValid={false}
        initialValue="value"
        handleChange={() => {}}
        minLength={3}
        pattern={'[A-Za-z]{3}'}
      />,
    );

    expect(container.firstChild).toHaveValue('value');
    expect(container.firstChild).toHaveAttribute('type', 'password');
    expect(container.firstChild).toHaveAttribute('aria-invalid', 'true');
    expect(container.firstChild).toHaveAttribute('minLength', '3');
    expect(container.firstChild).toHaveAttribute('pattern', '[A-Za-z]{3}');
  });
});
