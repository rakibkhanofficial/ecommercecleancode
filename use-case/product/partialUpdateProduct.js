/**
 *partialUpdateProduct.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Product. {status, message, data}
 */
const partialUpdateProduct = ({ productDb }) => async (params,req,res) => {
  const product = await productDb.updateOne(params.query,params.dataToUpdate);
  if (!product){
    return response.recordNotFound();
  }
  return response.success({ data:product });
};
module.exports = partialUpdateProduct;