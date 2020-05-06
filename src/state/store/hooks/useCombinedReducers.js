import { useReducer } from "react";
import authReducer, { authDefault } from "../../reducers/auth";
import counterReducer, { counterDefault } from "../../reducers/counter";
import financialReducer, { financialDefault } from "../../reducers/financial";
import themeReducer, { themeDefault } from "../../reducers/theme";


const useCombinedReducers = () => {
  const [authStore, auth] = useReducer(authReducer, authDefault);
  const [counterStore, counter] = useReducer(counterReducer, counterDefault);
  const [financialStore, financial] = useReducer(financialReducer, financialDefault);
  const [themeStore, theme] = useReducer(themeReducer, themeDefault);


  return {
    store: {
      auth: { ...authStore },
      counter: { ...counterStore },
      financial: { ...financialStore },
      theme: {...themeStore},
    },
    reducers: [
      auth,
      counter,
      financial,
      theme
    ]
  };
};

export default useCombinedReducers;