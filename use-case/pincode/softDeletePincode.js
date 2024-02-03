/**
 *softDeletePincode.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Pincode. {status, message, data}
 */
const softDeletePincode = ({ pincodeDb }) => async (params,req,res) => {
  let updatedPincode = await pincodeDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedPincode){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedPincode });
};
module.exports = softDeletePincode;