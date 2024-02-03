/**
 *updateProduct.js
 */

const  productEntity = require('../../entities/product');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Product. {status, message, data}
 */
const updateProduct = ({
  productDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let product = productEntity(dataToUpdate);
  product = await productDb.updateOne(query,product);
  if (!product){
    return response.recordNotFound();
  }
  return response.success({ data:product });
};
module.exports = updateProduct;