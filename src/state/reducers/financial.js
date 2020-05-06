
import * as ActionTypes from '../action-types';
import axios from "axios";

export const financialDefault = {
  wasPaid: false,
  debt: -500,
}



const financialReducer = (state = financialDefault, action) => {
  switch (action.type) {
    case ActionTypes.PAY: {
      console.log('REDUCER ', action);
      return {
        ...state,
        debt: state.debt + action.payload
      }
    }

    case ActionTypes.DEMAND: {
      console.log('REDUCER ', action);
      return {
        ...state,
        debt: state.debt - action.payload
      }
    }

    default:
      return state;
  }

};


export default financialReducer;