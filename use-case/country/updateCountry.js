/**
 *updateCountry.js
 */

const  countryEntity = require('../../entities/country');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Country. {status, message, data}
 */
const updateCountry = ({
  countryDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let country = countryEntity(dataToUpdate);
  country = await countryDb.updateOne(query,country);
  if (!country){
    return response.recordNotFound();
  }
  return response.success({ data:country });
};
module.exports = updateCountry;