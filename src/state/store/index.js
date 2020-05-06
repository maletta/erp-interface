import React from "react";
import PropTypes from "prop-types";
import useCombinedReducers from "./hooks/useCombinedReducers";
import { StoreContext } from "./hooks/useStore";
import middleware from "./middleware/middleware";
import { createThunkMiddleware as thunk1 } from "./middleware/thunk1";
import { createThunkMiddleware as thunk2 } from "./middleware/thunk2";

const Provider = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = action => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  };

  const applyMiddleware = middlewares =>
    ({ dispatch, getState }) =>
      action => {
        middlewares('bobo')({ dispatch, getState })()(action);
        return 'ok'
      }



  const withMiddleware = action => {
    const dispatch = triggerDispatchs;
    const getState = () => store;
    // middleware(action)(triggerDispatchs); // antigo funfionando
    // thunk1('bobo')(triggerDispatchs, store)(action); novo tá funcionando
    //applyMiddleware([thunk1])
    thunk1()({ dispatch, getState })(action);

  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: withMiddleware
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;