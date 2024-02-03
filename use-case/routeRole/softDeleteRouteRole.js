/**
 *softDeleteRouteRole.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated RouteRole. {status, message, data}
 */
const softDeleteRouteRole = ({ routeRoleDb }) => async (params,req,res) => {
  let updatedRouteRole = await routeRoleDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedRouteRole){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedRouteRole });
};
module.exports = softDeleteRouteRole;