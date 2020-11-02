import React from 'react';
import {render} from '@testing-library/react';
import CheckBox from './CheckBox';

describe('CheckBox', () => {
  it('renders', () => {
    const {container} = render(<CheckBox />);

    expect(container.firstChild).toBeTruthy();
  });
});
