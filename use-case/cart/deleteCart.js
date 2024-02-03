
/**
 *deleteCart.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Cart. {status, message, data}
 */
const deleteCart = ({ cartDb }) => async (query,req,res) => {
  let deletedCart = await cartDb.deleteOne(query);
  if (!deletedCart){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedCart });
};

module.exports = deleteCart;