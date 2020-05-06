import * as ActionTypes from '../action-types';

export const setThemeAction = (payload) => {
  return {
    type: ActionTypes.SET_THEME,
    payload,
  }
}