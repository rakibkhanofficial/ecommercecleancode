
/**
 *bulkInsertWalletTransaction.js
 */

const  walletTransactionEntity = require('../../entities/walletTransaction');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created WalletTransactions. {status, message, data}
 */

const bulkInsertWalletTransaction = ({ walletTransactionDb }) => async (dataToCreate,req,res) => {
  let wallettransactionEntities = dataToCreate.map(item => walletTransactionEntity(item));
  let createdWalletTransaction = await walletTransactionDb.create(wallettransactionEntities);
  return response.success({ data:{ count:createdWalletTransaction.length || 0 } });
};
module.exports = bulkInsertWalletTransaction;