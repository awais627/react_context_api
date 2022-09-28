export const initialState: IStoreStates = {
  baseUser: { name: "Awais" },
};

interface IUserDetails {
  name: string;
}
export enum ActionNames {
  SET_USER = "SET_USER",
}
interface SetUserAction {
  type: ActionNames.SET_USER;
  payload: {
    baseUser: IUserDetails;
  };
}
export interface IStoreStates {
  baseUser: IUserDetails;
}
export type IDispatch = (action: ActionTypes) => void;

export type ActionTypes = SetUserAction;

export const reducer = (state: IStoreStates, action: SetUserAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionNames.SET_USER:
      return { ...state, name: payload.baseUser };
    default:
      return state;
  }
};
