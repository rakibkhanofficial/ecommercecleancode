/**
 *softDeleteWalletTransaction.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated WalletTransaction. {status, message, data}
 */
const softDeleteWalletTransaction = ({ walletTransactionDb }) => async (params,req,res) => {
  let updatedWalletTransaction = await walletTransactionDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedWalletTransaction){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedWalletTransaction });
};
module.exports = softDeleteWalletTransaction;