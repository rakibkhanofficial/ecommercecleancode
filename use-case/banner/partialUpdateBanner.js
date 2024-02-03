/**
 *partialUpdateBanner.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Banner. {status, message, data}
 */
const partialUpdateBanner = ({ bannerDb }) => async (params,req,res) => {
  const banner = await bannerDb.updateOne(params.query,params.dataToUpdate);
  if (!banner){
    return response.recordNotFound();
  }
  return response.success({ data:banner });
};
module.exports = partialUpdateBanner;