import { THEME } from "./themeTypes"


export const themeEdit = (theme) => {

  return {
    type: THEME,
    paylod:theme
  }
}
