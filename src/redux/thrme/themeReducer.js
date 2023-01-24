import { THEME } from "./themeTypes";

const initialState = {
  theme: localStorage.getItem('theme')||"",
}

export const themeReducter = (state = initialState, action) => {

  switch (action.type) { 
    case THEME:
      return {
        ...state,
        theme: state.theme = action.paylod
      }
    default:
      return state;
  }
}