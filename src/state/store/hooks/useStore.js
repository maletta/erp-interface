import { useContext, createContext } from "react";
import { authDefault } from "../../reducers/auth";
import { counterDefault } from "../../reducers/counter";
import { financialDefault } from "../../reducers/financial";
import { themeDefault } from "../../reducers/theme";

export const defaultStore = {
  store: {
    auth: { ...authDefault },
    counter: { ...counterDefault },
    financial: { ...financialDefault },
    theme: {...themeDefault},
  },
  dispatch: () => { }
};

export const StoreContext = createContext(defaultStore);

export default () => {
  return useContext(StoreContext);
};