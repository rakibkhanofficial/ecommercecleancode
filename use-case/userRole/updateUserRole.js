/**
 *updateUserRole.js
 */

const  userRoleEntity = require('../../entities/userRole');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated UserRole. {status, message, data}
 */
const updateUserRole = ({
  userRoleDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let userrole = userRoleEntity(dataToUpdate);
  userrole = await userRoleDb.updateOne(query,userrole);
  if (!userrole){
    return response.recordNotFound();
  }
  return response.success({ data:userrole });
};
module.exports = updateUserRole;