/**
 *addCity.js
 */

const  cityEntity = require('../../entities/city');
const response = require('../../utils/response');
/**
 * @description : create new record of city in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCity = ({
  cityDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let city = cityEntity(dataToCreate);
  city = await cityDb.create(city);
  return response.success({ data:city });
};
module.exports = addCity;