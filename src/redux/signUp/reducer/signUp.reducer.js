export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';

export const addField = field => ({
  type: ADD_FIELD,
  payload: field,
});

export const removeField = fieldName => ({
  type: REMOVE_FIELD,
  payload: fieldName,
});

export const INITIAL_STATE = {};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD:
      const {name, value, isValid = true} = action.payload;

      return {
        ...state,
        [name]: {
          value,
          isValid,
        },
      };

    case REMOVE_FIELD:
      return Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }

        return object;
      }, {});

    default:
      return state;
  }
};
export {signUpReducer};
