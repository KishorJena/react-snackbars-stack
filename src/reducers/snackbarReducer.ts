import { SnackbarItem, SnackbarAction } from '../types';
import { eventEmitter } from '../event';

export const snackbarReducer = (
  state: SnackbarItem[],
  action: SnackbarAction,
  maxSnackbars: number
): SnackbarItem[] => {
  switch (action.type) {
    case 'ADD_SNACKBAR':
      return [...state, action.payload].slice(-maxSnackbars);
    case 'CLOSE_SNACKBAR':
      return state.map(snackbar => {
        if (snackbar.id === action.payload) {
          eventEmitter.removeFromActiveMessages(snackbar.message);
          return { ...snackbar, open: false };
        }
        return snackbar;
      });
    case 'REMOVE_SNACKBAR':
      return state.filter(snackbar => snackbar.id !== action.payload);
    case 'CLEAR_ALL':
      state.forEach(snackbar => {
        eventEmitter.removeFromActiveMessages(snackbar.message);
      });
      return [];
    default:
      return state;
  }
};
