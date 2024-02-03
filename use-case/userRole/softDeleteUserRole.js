/**
 *softDeleteUserRole.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated UserRole. {status, message, data}
 */
const softDeleteUserRole = ({ userRoleDb }) => async (params,req,res) => {
  let updatedUserRole = await userRoleDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedUserRole){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedUserRole });
};
module.exports = softDeleteUserRole;