import React from 'react';
import {render} from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  it('renders', () => {
    const {container} = render(<TextArea />);

    expect(container.firstChild).toBeTruthy();
  });
});
