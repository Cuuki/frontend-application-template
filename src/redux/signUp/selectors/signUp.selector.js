import {createSelector} from 'reselect';

const getSignUp = state => state.signUp;

const signUpSelector = createSelector([getSignUp], signUp => signUp);

export {signUpSelector};
