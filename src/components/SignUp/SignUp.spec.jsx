import React from 'react';
import {render} from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp', () => {
  it('renders', () => {
    const {container} = render(<SignUp />);

    expect(container.firstChild).toBeTruthy();
  });
});
