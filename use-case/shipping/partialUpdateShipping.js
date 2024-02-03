/**
 *partialUpdateShipping.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Shipping. {status, message, data}
 */
const partialUpdateShipping = ({ shippingDb }) => async (params,req,res) => {
  const shipping = await shippingDb.updateOne(params.query,params.dataToUpdate);
  if (!shipping){
    return response.recordNotFound();
  }
  return response.success({ data:shipping });
};
module.exports = partialUpdateShipping;