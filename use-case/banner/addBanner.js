/**
 *addBanner.js
 */

const  bannerEntity = require('../../entities/banner');
const response = require('../../utils/response');
/**
 * @description : create new record of banner in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addBanner = ({
  bannerDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let banner = bannerEntity(dataToCreate);
  banner = await bannerDb.create(banner);
  return response.success({ data:banner });
};
module.exports = addBanner;