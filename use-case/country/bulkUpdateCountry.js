/**
 *bulkUpdateCountry.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of country with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateCountry = ({ countryDb }) => async (params,req,res) => {
  const updatedCountry = await countryDb.updateMany(params.query,params.dataToUpdate);
  return response.success({ data:{ count:updatedCountry } });
};
module.exports = bulkUpdateCountry;