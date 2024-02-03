/**
 *partialUpdateCategory.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Category. {status, message, data}
 */
const partialUpdateCategory = ({ categoryDb }) => async (params,req,res) => {
  const category = await categoryDb.updateOne(params.query,params.dataToUpdate);
  if (!category){
    return response.recordNotFound();
  }
  return response.success({ data:category });
};
module.exports = partialUpdateCategory;