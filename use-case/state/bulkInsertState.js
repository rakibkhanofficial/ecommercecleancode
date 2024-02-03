
/**
 *bulkInsertState.js
 */

const  stateEntity = require('../../entities/state');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created States. {status, message, data}
 */

const bulkInsertState = ({ stateDb }) => async (dataToCreate,req,res) => {
  let stateEntities = dataToCreate.map(item => stateEntity(item));
  let createdState = await stateDb.create(stateEntities);
  return response.success({ data:{ count:createdState.length || 0 } });
};
module.exports = bulkInsertState;