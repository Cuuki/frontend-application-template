import React from 'react';
import {render} from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders', () => {
    const {container} = render(<TextInput />);

    expect(container.firstChild).toBeTruthy();
  });
});
