import React from 'react';
import {render} from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with default props and children', () => {
    const {container} = render(<Button>Sign Up</Button>);

    expect(container.firstChild).toHaveTextContent('Sign Up');
    expect(container.firstChild).toHaveAttribute('type', 'button');
  });

  it('renders with type "submit" and children', () => {
    const {container} = render(
      <Button type="submit" variant="secondary">
        Sign Up
      </Button>,
    );

    expect(container.firstChild).toHaveTextContent('Sign Up');
    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });
});
