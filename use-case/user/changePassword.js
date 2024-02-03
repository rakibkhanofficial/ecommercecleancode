/**
 *changePassword.js
 */
const bcrypt = require('bcrypt');

const response = require('../../utils/response');

/**
 * @description : change password.
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of change password. {status, message, data}
 */
const changePassword = ({ userDb }) => async (params) => {

  if (!params.newPassword || !params.userId || !params.oldPassword) {
    return response.validationError({ message:'Please Provide userId and new Password and Old password' });
  }

  let password = params.newPassword;
  let oldPassword = params.oldPassword;
  let user = await userDb.findOne({ _id :params.userId });
  if (!user){
    return response.badRequest({ message:'User not found.' });
  }
  let isPasswordMatch = await user.isPasswordMatch(oldPassword);
  if (!isPasswordMatch){
    return response.badRequest({ message:'Incorrect old password.' });
  }
  password = await bcrypt.hash(password, 8);
  let updatedUser = userDb.updateOne({ _id : user.id }, { 'password':password });
  if (updatedUser) {
    return response.success({ message : 'Password changed successfully.' });
  }
  return response.badRequest({ message : 'Password not updated.' });
};

module.exports = changePassword;