import { LANG } from "./langTypes";

const initialState = {
  lang: localStorage.getItem('lang') || "",
}

export const langReducter = (state = initialState, action) => {

  switch (action.type) {
    case LANG:
      return {
        ...state,
        lang: state.lang = action.paylod
      }
    default:
      return state;
  }
}