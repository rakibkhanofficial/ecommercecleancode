/**
 *partialUpdatePincode.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Pincode. {status, message, data}
 */
const partialUpdatePincode = ({ pincodeDb }) => async (params,req,res) => {
  const pincode = await pincodeDb.updateOne(params.query,params.dataToUpdate);
  if (!pincode){
    return response.recordNotFound();
  }
  return response.success({ data:pincode });
};
module.exports = partialUpdatePincode;