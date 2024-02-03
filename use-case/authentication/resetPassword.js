const dayjs = require('dayjs');
const bcrypt = require('bcrypt');
const response = require('../../utils/response');
const emailService = require('../../services/email');

/**
 * @description : reset password with code and new password
 * @param {Object} params : request body.
 * @return {Object} : response for resetPassword {status, message, data}
 */ 
const resetPassword = ({ userDb }) => async (params) => {
  if (!params.code || !params.newPassword) {
    return response.badRequest({ message : 'Insufficient request parameters! newPassword and code is required.' });
  }
  let where = { 'resetPasswordLink.code': params.code };
  where.isActive = true;where.isDeleted = false;    let user = await userDb.findOne(where);
  //TODO : add condition for guest User

  if (user && user.resetPasswordLink.expireTime) {
    if (dayjs(new Date()).isAfter(dayjs(user.resetPasswordLink.expireTime))) {
      // link expire
      return response.badRequest({ message:'Your reset password link is expired.' });
    }
  } else {
    // invalid code
    return response.badRequest({ message :'Invalid Code' });
  }
  where = { _id: user.id };
  where.isActive = true;where.isDeleted = false;    let newPassword = await bcrypt.hash(params.newPassword, 8);
  await userDb.updateOne(where, {
    'password': newPassword,
    resetPasswordLink: null,
    loginRetryLimit:0
  });
  let mailObj = {
    subject: 'Reset Password',
    to: user.email,
    template: '/views/email/SuccessfulPasswordReset',
    data: {
      isWidth: true,
      email: user.email || '-',
      message: 'Your password has been changed Successfully.'
    }
  };
  await emailService.sendMail(mailObj);
  return response.success({ message :'Password reset successfully' });
};
module.exports = resetPassword;