const response = require('../../utils/response');

/**
 * @description : logout user
 * @param {Object} user : user information.
 * @param {String} token : token.
 * @return {Object} : response for logout {status, message, data}
 */
const logout = ({ userTokensDb }) => async (user, token) => {
  let userToken = await userTokensDb.findOne({
    token ,
    userId:user.id 
  });
  let updatedDocument = { isTokenExpired : true };
  await userTokensDb.updateOne( { _id:userToken.id },updatedDocument);
  return response.success({ message:'Logged out Successfully' });
};
module.exports = logout;