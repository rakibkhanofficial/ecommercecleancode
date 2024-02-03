/**
 *softDeleteManyUserRole.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyUserRole = ({ userRoleDb }) => async (params, req, res) => {
  let updatedUserRole = await userRoleDb.updateMany(params.query, params.dataToUpdate);
  if (!updatedUserRole){
    return response.recordNotFound();
  }
  return response.success({ data:{ count : updatedUserRole } });
};
module.exports = softDeleteManyUserRole;
