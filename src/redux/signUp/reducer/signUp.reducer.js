export const ADD_FIELD = 'ADD_FIELD';
export const ADD_FIELDS = 'ADD_FIELDS';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';
export const SET_FIELD_VALIDITY = 'SET_FIELD_VALIDITY';

export const addField = field => ({
  type: ADD_FIELD,
  payload: field,
});

export const addFields = fields => ({
  type: ADD_FIELDS,
  payload: fields,
});

export const removeField = fieldName => ({
  type: REMOVE_FIELD,
  payload: fieldName,
});

export const clearFields = () => ({
  type: CLEAR_FIELDS,
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
          isValid:
            typeof action.payload.isValid === 'undefined'
              ? true
              : action.payload.isValid,
        },
      };

    case ADD_FIELDS:
      return {
        ...state,
        ...action.payload,
      };

    case REMOVE_FIELD:
      return Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }

        return object;
      }, {});

    case CLEAR_FIELDS:
      return {};

    case SET_FIELD_VALIDITY:
      return {
        ...state,
        [action.payload.name]: {
          value: state[action.payload.name]?.value,
          isValid:
            typeof action.payload.isValid === 'undefined'
              ? true
              : action.payload.isValid,
        },
      };

    default:
      return state;
  }
};
export {signUpReducer};
