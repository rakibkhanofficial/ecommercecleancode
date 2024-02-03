
/**
 *deleteProduct.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Product. {status, message, data}
 */
const deleteProduct = ({ productDb }) => async (query,req,res) => {
  let deletedProduct = await productDb.deleteOne(query);
  if (!deletedProduct){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedProduct });
};

module.exports = deleteProduct;