/**
 *softDeleteBanner.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Banner. {status, message, data}
 */
const softDeleteBanner = ({ bannerDb }) => async (params,req,res) => {
  let updatedBanner = await bannerDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedBanner){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedBanner });
};
module.exports = softDeleteBanner;