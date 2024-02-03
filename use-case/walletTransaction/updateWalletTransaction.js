/**
 *updateWalletTransaction.js
 */

const  walletTransactionEntity = require('../../entities/walletTransaction');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated WalletTransaction. {status, message, data}
 */
const updateWalletTransaction = ({
  walletTransactionDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let wallettransaction = walletTransactionEntity(dataToUpdate);
  wallettransaction = await walletTransactionDb.updateOne(query,wallettransaction);
  if (!wallettransaction){
    return response.recordNotFound();
  }
  return response.success({ data:wallettransaction });
};
module.exports = updateWalletTransaction;