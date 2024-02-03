/**
 *softDeleteManyCart.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyCart = ({ cartDb }) => async (params, req, res) => {
  let updatedCart = await cartDb.updateMany(params.query, params.dataToUpdate);
  if (!updatedCart){
    return response.recordNotFound();
  }
  return response.success({ data:{ count : updatedCart } });
};
module.exports = softDeleteManyCart;
