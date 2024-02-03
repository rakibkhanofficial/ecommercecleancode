/**
 *partialUpdateCity.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated City. {status, message, data}
 */
const partialUpdateCity = ({ cityDb }) => async (params,req,res) => {
  const city = await cityDb.updateOne(params.query,params.dataToUpdate);
  if (!city){
    return response.recordNotFound();
  }
  return response.success({ data:city });
};
module.exports = partialUpdateCity;