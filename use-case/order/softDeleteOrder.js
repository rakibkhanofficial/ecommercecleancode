/**
 *softDeleteOrder.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Order. {status, message, data}
 */
const softDeleteOrder = ({ orderDb }) => async (params,req,res) => {
  let updatedOrder = await orderDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedOrder){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedOrder });
};
module.exports = softDeleteOrder;