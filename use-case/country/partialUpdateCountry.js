/**
 *partialUpdateCountry.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Country. {status, message, data}
 */
const partialUpdateCountry = ({ countryDb }) => async (params,req,res) => {
  const country = await countryDb.updateOne(params.query,params.dataToUpdate);
  if (!country){
    return response.recordNotFound();
  }
  return response.success({ data:country });
};
module.exports = partialUpdateCountry;