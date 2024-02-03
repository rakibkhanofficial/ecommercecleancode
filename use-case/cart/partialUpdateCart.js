/**
 *partialUpdateCart.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Cart. {status, message, data}
 */
const partialUpdateCart = ({ cartDb }) => async (params,req,res) => {
  const cart = await cartDb.updateOne(params.query,params.dataToUpdate);
  if (!cart){
    return response.recordNotFound();
  }
  return response.success({ data:cart });
};
module.exports = partialUpdateCart;