const dayjs = require('dayjs');
const response = require('../../utils/response');

/**
 * @description : validate OTP
 * @param {Object} params : request body.
 * @return {Object} : response for validateResetPasswordOtp  {status, message, data}
 */
const validateResetPasswordOtp = ({ userDb }) => async (params) => {
  if (!params.otp) {
    return response.badRequest({ message : 'Insufficient request parameters! otp is required.' });
  }
  const where = { 'resetPasswordLink.code': params.otp };
  where.isActive = true;where.isDeleted = false;    let user = await userDb.findOne(where);
  if (!user || !user.resetPasswordLink.expireTime) {
    return response.badRequest({ message : 'Invalid OTP' });
  }
  // link expire
  if (dayjs(new Date()).isAfter(dayjs(user.resetPasswordLink.expireTime))) {
    return response.badRequest({ message:'Your reset password link is expired.' });
  }
  return response.success({ message :'OTP Validated' });
};
module.exports = validateResetPasswordOtp;