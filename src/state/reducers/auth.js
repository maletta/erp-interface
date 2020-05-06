export const authDefault = {
    isLogged: false,
    user: {}
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const authReducer = (state = authDefault, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: {}
      };
    default:
      return state;
  }
};

export const loginAction = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export default authReducer;
