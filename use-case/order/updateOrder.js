/**
 *updateOrder.js
 */

const  orderEntity = require('../../entities/order');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Order. {status, message, data}
 */
const updateOrder = ({
  orderDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let order = orderEntity(dataToUpdate);
  order = await orderDb.updateOne(query,order);
  if (!order){
    return response.recordNotFound();
  }
  return response.success({ data:order });
};
module.exports = updateOrder;