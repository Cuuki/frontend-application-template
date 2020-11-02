import {
  addField,
  INITIAL_STATE,
  removeField,
  signUpReducer,
} from './signUp.reducer';

describe('signUpReducer', () => {
  it('returns initial state', () => {
    const state = signUpReducer(INITIAL_STATE, {});

    expect(state).toEqual(INITIAL_STATE);
  });

  it('returns state with firstname', () => {
    const state = signUpReducer(
      INITIAL_STATE,
      addField({
        name: 'firstname',
        value: 'John',
      }),
    );

    expect(state).toEqual({firstname: {value: 'John', isValid: true}});
  });

  it('returns empty state', () => {
    const state = signUpReducer(
      {firstname: {value: 'John', isValid: true}},
      removeField('firstname'),
    );

    expect(state).toEqual({});
  });
});
