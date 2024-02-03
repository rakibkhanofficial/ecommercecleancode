/**
 *updateRole.js
 */

const  roleEntity = require('../../entities/role');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Role. {status, message, data}
 */
const updateRole = ({
  roleDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let role = roleEntity(dataToUpdate);
  role = await roleDb.updateOne(query,role);
  if (!role){
    return response.recordNotFound();
  }
  return response.success({ data:role });
};
module.exports = updateRole;