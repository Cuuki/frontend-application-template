import React from 'react';
import {render} from '@testing-library/react';
import SignUp from './SignUp';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

describe('SignUp', () => {
  it('renders', () => {
    const {container} = render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );

    expect(container.firstChild).toBeTruthy();
  });
});
