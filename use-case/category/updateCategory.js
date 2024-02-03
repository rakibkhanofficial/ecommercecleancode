/**
 *updateCategory.js
 */

const  categoryEntity = require('../../entities/category');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Category. {status, message, data}
 */
const updateCategory = ({
  categoryDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let category = categoryEntity(dataToUpdate);
  category = await categoryDb.updateOne(query,category);
  if (!category){
    return response.recordNotFound();
  }
  return response.success({ data:category });
};
module.exports = updateCategory;