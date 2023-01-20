import { combineReducers } from "redux";
import { tokenReducter } from "./token/tokenReducer";

export const rootReducer = combineReducers(
  {
    token: tokenReducter,
 }
)