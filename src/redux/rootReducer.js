import { combineReducers } from "redux";
import { langReducter } from "./lang/langReducer";
import { themeReducter } from "./thrme/themeReducer";
import { tokenReducter } from "./token/tokenReducer";

export const rootReducer = combineReducers(
  {
    token: tokenReducter,
    theme: themeReducter,
    lang: langReducter,
  }
)