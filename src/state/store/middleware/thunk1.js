// export const createThunkMiddleware = (any) =>
//   (...props) => {
//     const { dispatch, getState } = props;
//     console.log('passei por aqui');
//     console.log('passei props ', ...props);
//     return action => {
//       if (typeof action === 'function') {
//         return action(dispatch, getState, any);
//       }
//       console.log('passei por aqui também');
//       return action;
//     };
//   }
// 
// 
// export default createThunkMiddleware();

/* tá funcionando 
export const createThunkMiddleware = (any) => {
  console.log('passei primeiro ', any);
  return (props) => {
    console.log('passei por aqui ', props)
    const { dispatch, getState } = props;
  
      return action => {
    console.log('passei também ', action)
        if (typeof action === 'function') {
          return action(props, getState, any);
        }
        //return next(action);
        return action(props, getState, any);
      };
  } 
}
*/
export const createThunkMiddleware = (any) =>
  ({ dispatch, getState }) =>
    //next =>
    action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, any);
      }
      if (typeof action === 'object') {
        return dispatch(action);
      }
      // return next(action);
      //return action(dispatch, getState, any);
    };

export default createThunkMiddleware();