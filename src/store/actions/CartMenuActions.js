export const TOGGLE_MENU = 'cart.toggle-menu';

const toggleMenu = isOpen => ({
  type: TOGGLE_MENU,
  payload: isOpen
});


export { toggleMenu };
