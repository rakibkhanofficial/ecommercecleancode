/**
 *partialUpdateProjectRoute.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated ProjectRoute. {status, message, data}
 */
const partialUpdateProjectRoute = ({ projectRouteDb }) => async (params,req,res) => {
  const projectroute = await projectRouteDb.updateOne(params.query,params.dataToUpdate);
  if (!projectroute){
    return response.recordNotFound();
  }
  return response.success({ data:projectroute });
};
module.exports = partialUpdateProjectRoute;