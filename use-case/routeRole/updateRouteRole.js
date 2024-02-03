/**
 *updateRouteRole.js
 */

const  routeRoleEntity = require('../../entities/routeRole');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated RouteRole. {status, message, data}
 */
const updateRouteRole = ({
  routeRoleDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let routerole = routeRoleEntity(dataToUpdate);
  routerole = await routeRoleDb.updateOne(query,routerole);
  if (!routerole){
    return response.recordNotFound();
  }
  return response.success({ data:routerole });
};
module.exports = updateRouteRole;