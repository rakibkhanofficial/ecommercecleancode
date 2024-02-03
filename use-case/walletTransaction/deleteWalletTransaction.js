
/**
 *deleteWalletTransaction.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted WalletTransaction. {status, message, data}
 */
const deleteWalletTransaction = ({ walletTransactionDb }) => async (query,req,res) => {
  let deletedWalletTransaction = await walletTransactionDb.deleteOne(query);
  if (!deletedWalletTransaction){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedWalletTransaction });
};

module.exports = deleteWalletTransaction;