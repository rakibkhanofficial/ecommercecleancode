/**
 *partialUpdateOrder.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Order. {status, message, data}
 */
const partialUpdateOrder = ({ orderDb }) => async (params,req,res) => {
  const order = await orderDb.updateOne(params.query,params.dataToUpdate);
  if (!order){
    return response.recordNotFound();
  }
  return response.success({ data:order });
};
module.exports = partialUpdateOrder;