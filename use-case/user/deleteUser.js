
/**
 *deleteUser.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted User. {status, message, data}
 */
const deleteUser = ({
  userDb,productDb,categoryDb,orderDb,bannerDb,cartDb,countryDb,cityDb,pincodeDb,stateDb,walletDb,walletTransactionDb,shippingDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedUser = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      userDb,
      productDb,
      categoryDb,
      orderDb,
      bannerDb,
      cartDb,
      countryDb,
      cityDb,
      pincodeDb,
      stateDb,
      walletDb,
      walletTransactionDb,
      shippingDb,
      userTokensDb,
      roleDb,
      projectRouteDb,
      routeRoleDb,
      userRoleDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      userDb,
      productDb,
      categoryDb,
      orderDb,
      bannerDb,
      cartDb,
      countryDb,
      cityDb,
      pincodeDb,
      stateDb,
      walletDb,
      walletTransactionDb,
      shippingDb,
      userTokensDb,
      roleDb,
      projectRouteDb,
      routeRoleDb,
      userRoleDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteUser;