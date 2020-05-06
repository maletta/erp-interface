import * as ActionTypes from '../../action-types';
import paletteTypes, * as palettes from "../../../utils/palettes";

export const themeDefault = {
  palette: { ...palettes.accountsPayable },
}

const selectPalette = (palette) => {
  try {
    return palettes[palette];
  }
  catch (e) {
    e.message = `Palette ${palette} não encontrado no objeto de palettes`;
    throw e;
  }
}

const themeReducer = (state = themeDefault, action) => {

  switch (action.type) {
    case ActionTypes.SET_THEME: {
      return {
        ...state,
        palette: selectPalette(action.payload) || state.palette,
      }
    }

    default:
      return state;

  }
}

export default themeReducer;