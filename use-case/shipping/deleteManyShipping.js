/**
 *deleteManyShipping.js
 */

const response = require('../../utils/response');
/**
 * @description : delete records from database by using ids.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyShipping = ({ shippingDb }) => async (query,req,res) => {
  let deletedShipping = await shippingDb.deleteMany(query);
  return response.success({ data: { count : deletedShipping } });
};
module.exports = deleteManyShipping;