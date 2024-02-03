/**
 *partialUpdateRole.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Role. {status, message, data}
 */
const partialUpdateRole = ({ roleDb }) => async (params,req,res) => {
  const role = await roleDb.updateOne(params.query,params.dataToUpdate);
  if (!role){
    return response.recordNotFound();
  }
  return response.success({ data:role });
};
module.exports = partialUpdateRole;