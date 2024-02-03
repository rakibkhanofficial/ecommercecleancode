
/**
 *deletePincode.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Pincode. {status, message, data}
 */
const deletePincode = ({ pincodeDb }) => async (query,req,res) => {
  let deletedPincode = await pincodeDb.deleteOne(query);
  if (!deletedPincode){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedPincode });
};

module.exports = deletePincode;