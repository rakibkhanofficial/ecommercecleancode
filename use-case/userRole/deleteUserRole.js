
/**
 *deleteUserRole.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted UserRole. {status, message, data}
 */
const deleteUserRole = ({ userRoleDb }) => async (query,req,res) => {
  let deletedUserRole = await userRoleDb.deleteOne(query);
  if (!deletedUserRole){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedUserRole });
};

module.exports = deleteUserRole;