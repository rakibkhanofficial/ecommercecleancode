/**
 *updateWallet.js
 */

const  walletEntity = require('../../entities/wallet');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Wallet. {status, message, data}
 */
const updateWallet = ({
  walletDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let wallet = walletEntity(dataToUpdate);
  wallet = await walletDb.updateOne(query,wallet);
  if (!wallet){
    return response.recordNotFound();
  }
  return response.success({ data:wallet });
};
module.exports = updateWallet;