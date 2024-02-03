/**
 *addRole.js
 */

const  roleEntity = require('../../entities/role');
const response = require('../../utils/response');
/**
 * @description : create new record of role in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addRole = ({
  roleDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let role = roleEntity(dataToCreate);
  role = await roleDb.create(role);
  return response.success({ data:role });
};
module.exports = addRole;