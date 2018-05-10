import { TOGGLE_MENU } from '../actions/CartMenuActions';

const initialState = {
  isMenuOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !action.payload
      }
    default: {
      return state;
    }
  }
};