export const ADD_PRODUCT = 'products.add-product-list';
export const DELETE_PRODUCT = 'products.delete-product-list';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  payload: product
});
