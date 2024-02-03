const userDb = require('../../../../data-access/userDb');
const productDb = require('../../../../data-access/productDb');
const categoryDb = require('../../../../data-access/categoryDb');
const orderDb = require('../../../../data-access/orderDb');
const bannerDb = require('../../../../data-access/bannerDb');
const cartDb = require('../../../../data-access/cartDb');
const countryDb = require('../../../../data-access/countryDb');
const cityDb = require('../../../../data-access/cityDb');
const pincodeDb = require('../../../../data-access/pincodeDb');
const stateDb = require('../../../../data-access/stateDb');
const walletDb = require('../../../../data-access/walletDb');
const walletTransactionDb = require('../../../../data-access/walletTransactionDb');
const shippingDb = require('../../../../data-access/shippingDb');
const userTokensDb = require('../../../../data-access/userTokensDb');
const roleDb = require('../../../../data-access/roleDb');
const projectRouteDb = require('../../../../data-access/projectRouteDb');
const routeRoleDb = require('../../../../data-access/routeRoleDb');
const userRoleDb = require('../../../../data-access/userRoleDb');

const userSchema = require('../../../../validation/schema/user');

const createValidation = require('../../../../validation')(userSchema.createSchema);
const updateValidation = require('../../../../validation')(userSchema.updateSchema);
const filterValidation = require('../../../../validation')(userSchema.filterValidationSchema);
const addUserUsecase = require('../../../../use-case/user/addUser')({
  userDb,
  createValidation 
});
const findAllUserUsecase = require('../../../../use-case/user/findAllUser')({
  userDb,
  filterValidation
});
const getUserCountUsecase = require('../../../../use-case/user/getUserCount')({
  userDb,
  filterValidation
});
const getUserUsecase = require('../../../../use-case/user/getUser')({
  userDb,
  filterValidation
});
const updateUserUsecase = require('../../../../use-case/user/updateUser')({
  userDb,
  updateValidation 
});
const partialUpdateUserUsecase = require('../../../../use-case/user/partialUpdateUser')({ userDb });
const bulkInsertUserUsecase = require('../../../../use-case/user/bulkInsertUser')({ userDb });
const bulkUpdateUserUsecase = require('../../../../use-case/user/bulkUpdateUser')({ userDb });
const changePasswordUsecase = require('../../../../use-case/user/changePassword')({ userDb });
const updateProfileUsecase = require('../../../../use-case/user/updateProfile')({
  userDb,
  updateValidation
});

const userController = require('./user');

const addUser = userController.addUser(addUserUsecase);
const findAllUser = userController.findAllUser(findAllUserUsecase);
const getUserCount = userController.getUserCount(getUserCountUsecase);
const getUserById = userController.getUser(getUserUsecase);
const updateUser = userController.updateUser(updateUserUsecase);
const partialUpdateUser = userController.partialUpdateUser(partialUpdateUserUsecase);
const bulkInsertUser = userController.bulkInsertUser(bulkInsertUserUsecase);
const bulkUpdateUser = userController.bulkUpdateUser(bulkUpdateUserUsecase);
const changePassword = userController.changePassword(changePasswordUsecase);
const updateProfile = userController.updateProfile(updateProfileUsecase);
const getLoggedInUserInfo = userController.getLoggedInUserInfo(getUserUsecase);

module.exports = {
  addUser,
  findAllUser,
  getUserCount,
  getUserById,
  updateUser,
  partialUpdateUser,
  bulkInsertUser,
  bulkUpdateUser,
  changePassword,
  updateProfile,
  getLoggedInUserInfo,
};