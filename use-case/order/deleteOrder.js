
/**
 *deleteOrder.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Order. {status, message, data}
 */
const deleteOrder = ({ orderDb }) => async (query,req,res) => {
  let deletedOrder = await orderDb.deleteOne(query);
  if (!deletedOrder){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedOrder });
};

module.exports = deleteOrder;