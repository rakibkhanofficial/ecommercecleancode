
/**
 *bulkInsertWallet.js
 */

const  walletEntity = require('../../entities/wallet');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Wallets. {status, message, data}
 */

const bulkInsertWallet = ({ walletDb }) => async (dataToCreate,req,res) => {
  let walletEntities = dataToCreate.map(item => walletEntity(item));
  let createdWallet = await walletDb.create(walletEntities);
  return response.success({ data:{ count:createdWallet.length || 0 } });
};
module.exports = bulkInsertWallet;