
/**
 *deleteBanner.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Banner. {status, message, data}
 */
const deleteBanner = ({ bannerDb }) => async (query,req,res) => {
  let deletedBanner = await bannerDb.deleteOne(query);
  if (!deletedBanner){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedBanner });
};

module.exports = deleteBanner;