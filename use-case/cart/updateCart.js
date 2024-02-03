/**
 *updateCart.js
 */

const  cartEntity = require('../../entities/cart');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Cart. {status, message, data}
 */
const updateCart = ({
  cartDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let cart = cartEntity(dataToUpdate);
  cart = await cartDb.updateOne(query,cart);
  if (!cart){
    return response.recordNotFound();
  }
  return response.success({ data:cart });
};
module.exports = updateCart;