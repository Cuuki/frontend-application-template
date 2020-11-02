import React from 'react';
import {render} from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('renders with children', () => {
    const {container} = render(
      <Form handleSubmit={() => {}}>
        <input type="text" />
        <input type="password" />
        <input type="email" />
      </Form>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
