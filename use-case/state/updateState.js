/**
 *updateState.js
 */

const  stateEntity = require('../../entities/state');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated State. {status, message, data}
 */
const updateState = ({
  stateDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let state = stateEntity(dataToUpdate);
  state = await stateDb.updateOne(query,state);
  if (!state){
    return response.recordNotFound();
  }
  return response.success({ data:state });
};
module.exports = updateState;