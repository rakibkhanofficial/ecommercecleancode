/**
 *deleteManyBanner.js
 */

const response = require('../../utils/response');
/**
 * @description : delete records from database by using ids.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyBanner = ({ bannerDb }) => async (query,req,res) => {
  let deletedBanner = await bannerDb.deleteMany(query);
  return response.success({ data: { count : deletedBanner } });
};
module.exports = deleteManyBanner;