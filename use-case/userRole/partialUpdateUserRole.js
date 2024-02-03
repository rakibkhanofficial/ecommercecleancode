/**
 *partialUpdateUserRole.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated UserRole. {status, message, data}
 */
const partialUpdateUserRole = ({ userRoleDb }) => async (params,req,res) => {
  const userrole = await userRoleDb.updateOne(params.query,params.dataToUpdate);
  if (!userrole){
    return response.recordNotFound();
  }
  return response.success({ data:userrole });
};
module.exports = partialUpdateUserRole;