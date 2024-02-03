/**
 *partialUpdateWalletTransaction.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated WalletTransaction. {status, message, data}
 */
const partialUpdateWalletTransaction = ({ walletTransactionDb }) => async (params,req,res) => {
  const wallettransaction = await walletTransactionDb.updateOne(params.query,params.dataToUpdate);
  if (!wallettransaction){
    return response.recordNotFound();
  }
  return response.success({ data:wallettransaction });
};
module.exports = partialUpdateWalletTransaction;