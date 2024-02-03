/**
 *addWallet.js
 */

const  walletEntity = require('../../entities/wallet');
const response = require('../../utils/response');
/**
 * @description : create new record of wallet in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addWallet = ({
  walletDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let wallet = walletEntity(dataToCreate);
  wallet = await walletDb.create(wallet);
  return response.success({ data:wallet });
};
module.exports = addWallet;