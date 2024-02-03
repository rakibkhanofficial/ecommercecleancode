
/**
 *deleteShipping.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Shipping. {status, message, data}
 */
const deleteShipping = ({ shippingDb }) => async (query,req,res) => {
  let deletedShipping = await shippingDb.deleteOne(query);
  if (!deletedShipping){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedShipping });
};

module.exports = deleteShipping;