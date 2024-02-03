/**
 *partialUpdateRouteRole.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated RouteRole. {status, message, data}
 */
const partialUpdateRouteRole = ({ routeRoleDb }) => async (params,req,res) => {
  const routerole = await routeRoleDb.updateOne(params.query,params.dataToUpdate);
  if (!routerole){
    return response.recordNotFound();
  }
  return response.success({ data:routerole });
};
module.exports = partialUpdateRouteRole;