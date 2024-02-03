
/**
 *bulkInsertUser.js
 */

const  userEntity = require('../../entities/user');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Users. {status, message, data}
 */

const bulkInsertUser = ({ userDb }) => async (dataToCreate,req,res) => {
  let userEntities = dataToCreate.map(item => userEntity(item));
  let createdUser = await userDb.create(userEntities);
  return response.success({ data:{ count:createdUser.length || 0 } });
};
module.exports = bulkInsertUser;