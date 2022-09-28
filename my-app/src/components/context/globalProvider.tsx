import { createContext, FC, ReactNode, useReducer } from "react";
import { IDispatch, initialState, reducer } from "./reducer";
interface IStoreStates {
  baseUser: {
    name: string;
  };
}

export const GlobalContext = createContext<[IStoreStates, IDispatch]>([
  initialState,
  () => null,
]);
interface iGlobalProps {
  children: ReactNode;
}

export const GlobalProvider: FC<iGlobalProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <GlobalContext.Provider value={[state, dispatch]}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
};
