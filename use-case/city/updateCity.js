/**
 *updateCity.js
 */

const  cityEntity = require('../../entities/city');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated City. {status, message, data}
 */
const updateCity = ({
  cityDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let city = cityEntity(dataToUpdate);
  city = await cityDb.updateOne(query,city);
  if (!city){
    return response.recordNotFound();
  }
  return response.success({ data:city });
};
module.exports = updateCity;