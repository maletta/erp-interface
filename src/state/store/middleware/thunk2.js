export default function createThunkMiddleware(helpers) {
  return function thunkMiddleware({ dispatch, getState }) {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, helpers);
      }

      return next(action);
    };
  }
}