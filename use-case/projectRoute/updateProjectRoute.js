/**
 *updateProjectRoute.js
 */

const  projectRouteEntity = require('../../entities/projectRoute');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated ProjectRoute. {status, message, data}
 */
const updateProjectRoute = ({
  projectRouteDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let projectroute = projectRouteEntity(dataToUpdate);
  projectroute = await projectRouteDb.updateOne(query,projectroute);
  if (!projectroute){
    return response.recordNotFound();
  }
  return response.success({ data:projectroute });
};
module.exports = updateProjectRoute;