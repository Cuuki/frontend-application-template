export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const SET_FIELD_VALIDITY = 'SET_FIELD_VALIDITY';

export const addField = field => ({
  type: ADD_FIELD,
  payload: field,
});

export const removeField = fieldName => ({
  type: REMOVE_FIELD,
  payload: fieldName,
});

export const setFieldValidity = field => ({
  type: SET_FIELD_VALIDITY,
  payload: field,
});

export const INITIAL_STATE = {};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          isValid: action.payload.isValid,
        },
      };

    case REMOVE_FIELD:
      return Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }

        return object;
      }, {});

    case SET_FIELD_VALIDITY:
      return {
        ...state,
        [action.payload.name]: {
          value: state[action.payload.name]?.value,
          isValid: action.payload.isValid,
        },
      };

    default:
      return state;
  }
};
export {signUpReducer};
