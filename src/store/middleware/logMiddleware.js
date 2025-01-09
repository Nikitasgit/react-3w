import { addLog } from "../action/action-types";
import { ADD_DRAGON } from "../constants/action";

export const logMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_DRAGON) {
    const state = store.getState();
    const dragonExists = state.dragonReducer.dragon;
    if (
      dragonExists.name.length < 2 ||
      /[^a-zA-Z0-9]/.test(dragonExists.name)
    ) {
      return next(action);
    }
    store.dispatch(addLog());
  }
  return next(action);
};
