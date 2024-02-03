/**
 *partialUpdateState.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated State. {status, message, data}
 */
const partialUpdateState = ({ stateDb }) => async (params,req,res) => {
  const state = await stateDb.updateOne(params.query,params.dataToUpdate);
  if (!state){
    return response.recordNotFound();
  }
  return response.success({ data:state });
};
module.exports = partialUpdateState;