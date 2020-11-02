import {
  addField,
  addFields,
  clearFields,
  INITIAL_STATE,
  removeField,
  setFieldValidity,
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

  it('returns state with multiple fields', () => {
    const state = signUpReducer(
      INITIAL_STATE,
      addFields({
        firstname: {
          value: 'John',
          isValid: true,
        },
        lastname: {
          value: '',
          isValid: false,
        },
      }),
    );

    expect(state).toEqual({
      firstname: {value: 'John', isValid: true},
      lastname: {value: '', isValid: false},
    });
  });

  it('removes all fields from state and returns empty state object', () => {
    const state = signUpReducer(
      {firstname: {value: 'John', isValid: true}},
      clearFields(),
    );

    expect(state).toEqual({});
  });

  it('returns firstname field set from valid to invalid', () => {
    const state = signUpReducer(
      {firstname: {value: 'John', isValid: true}},
      setFieldValidity({name: 'firstname', isValid: false}),
    );

    expect(state).toEqual({firstname: {value: 'John', isValid: false}});
  });

  it('returns empty state', () => {
    const state = signUpReducer(
      {firstname: {value: 'John', isValid: true}},
      removeField('firstname'),
    );

    expect(state).toEqual({});
  });
});
