const signUpMiddleware = () => next => action => {
  return next(action);
};

export {signUpMiddleware};
