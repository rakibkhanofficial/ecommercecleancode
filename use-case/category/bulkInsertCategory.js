
/**
 *bulkInsertCategory.js
 */

const  categoryEntity = require('../../entities/category');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Categorys. {status, message, data}
 */

const bulkInsertCategory = ({ categoryDb }) => async (dataToCreate,req,res) => {
  let categoryEntities = dataToCreate.map(item => categoryEntity(item));
  let createdCategory = await categoryDb.create(categoryEntities);
  return response.success({ data:{ count:createdCategory.length || 0 } });
};
module.exports = bulkInsertCategory;