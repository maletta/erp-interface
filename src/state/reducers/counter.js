export const counterDefault = {
  value: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

const counterReducer = (state = counterDefault, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case RESET:
      return {
        value: 0
      };
    default:
      return state;
  }
};

export const incrementAction = () => {
  return {
    type: INCREMENT
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT
  };
};

export const resetAction = () => {
  return {
    type: RESET
  };
};

export default counterReducer;