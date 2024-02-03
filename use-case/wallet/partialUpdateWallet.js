/**
 *partialUpdateWallet.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Wallet. {status, message, data}
 */
const partialUpdateWallet = ({ walletDb }) => async (params,req,res) => {
  const wallet = await walletDb.updateOne(params.query,params.dataToUpdate);
  if (!wallet){
    return response.recordNotFound();
  }
  return response.success({ data:wallet });
};
module.exports = partialUpdateWallet;