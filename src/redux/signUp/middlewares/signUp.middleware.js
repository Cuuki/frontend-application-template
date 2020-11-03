import {
  ADD_FIELD,
  addFields,
  CLEAR_FIELDS,
  SET_FIELD_VALIDITY,
} from '../reducer/signUp.reducer';
import {isJsonString} from '../../../utils';

const SIGN_UP_STORAGE_KEY = 'signUp';

const getFieldsFromStorage = () => {
  const fields = localStorage.getItem(SIGN_UP_STORAGE_KEY);

  return isJsonString(fields) ? JSON.parse(fields) : {};
};

const saveFieldsToStorage = fields => {
  localStorage.setItem(SIGN_UP_STORAGE_KEY, JSON.stringify(fields));
};

export const persistStore = store => {
  store.dispatch(addFields(getFieldsFromStorage()));
};

const signUpMiddleware = () => next => action => {
  if (action.type === ADD_FIELD) {
    const {name, value, isValid} = action.payload;
    const fields = getFieldsFromStorage();

    if (fields?.[name]?.value !== value) {
      saveFieldsToStorage({
        ...fields,
        [name]: {value, isValid},
      });
    }
  }

  if (action.type === SET_FIELD_VALIDITY) {
    const {name, isValid} = action.payload;
    const fields = getFieldsFromStorage();

    if (fields?.[name]?.isValid !== isValid) {
      saveFieldsToStorage({
        ...fields,
        [name]: {value: fields?.[name]?.value, isValid},
      });
    }
  }

  if (action.type === CLEAR_FIELDS) {
    saveFieldsToStorage({});
  }

  return next(action);
};

export {signUpMiddleware};
