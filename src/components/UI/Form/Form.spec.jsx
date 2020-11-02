import React from 'react';
import {render} from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('renders', () => {
    const {container} = render(<Form />);

    expect(container.firstChild).toBeTruthy();
  });
});
