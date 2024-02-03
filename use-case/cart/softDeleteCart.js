/**
 *softDeleteCart.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Cart. {status, message, data}
 */
const softDeleteCart = ({ cartDb }) => async (params,req,res) => {
  let updatedCart = await cartDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedCart){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedCart });
};
module.exports = softDeleteCart;