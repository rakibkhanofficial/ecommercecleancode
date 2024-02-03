
/**
 *deleteRouteRole.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted RouteRole. {status, message, data}
 */
const deleteRouteRole = ({ routeRoleDb }) => async (query,req,res) => {
  let deletedRouteRole = await routeRoleDb.deleteOne(query);
  if (!deletedRouteRole){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedRouteRole });
};

module.exports = deleteRouteRole;