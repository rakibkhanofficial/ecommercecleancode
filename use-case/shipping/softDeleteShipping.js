/**
 *softDeleteShipping.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Shipping. {status, message, data}
 */
const softDeleteShipping = ({ shippingDb }) => async (params,req,res) => {
  let updatedShipping = await shippingDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedShipping){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedShipping });
};
module.exports = softDeleteShipping;