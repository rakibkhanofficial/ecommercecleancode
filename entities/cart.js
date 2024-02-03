module.exports = (cart) => {

  let newCart = { 
    customerId: cart.customerId,
    isVisible: cart.isVisible,
    cartItems: cart.cartItems,
    isActive: cart.isActive,
    createdAt: cart.createdAt,
    updatedAt: cart.updatedAt,
    addedBy: cart.addedBy,
    updatedBy: cart.updatedBy,
    isDeleted: cart.isDeleted,
  };

  // remove undefined values
  Object.keys(newCart).forEach(key => newCart[key] === undefined && delete newCart[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCart) => {
   *   if (!newCart.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCart) 
   */

  return Object.freeze(newCart);
};
