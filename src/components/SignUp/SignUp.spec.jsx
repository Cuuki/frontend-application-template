import React from 'react';
import {render} from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp', () => {
  it('renders with no values set', () => {
    const {container} = render(
      <SignUp
        fieldValues={{}}
        addField={() => {}}
        removeField={() => {}}
        setFieldValidity={() => {}}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with values for firstname lastname and email', () => {
    const {container} = render(
      <SignUp
        fieldValues={{
          firstname: {
            value: 'John',
            isValid: true,
          },
          lastname: {
            value: 'Doe',
            isValid: true,
          },
          email: {
            value: 'test@example',
            isValid: false,
          },
        }}
        addField={() => {}}
        removeField={() => {}}
        setFieldValidity={() => {}}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
