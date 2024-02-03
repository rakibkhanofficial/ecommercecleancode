const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,productDb,categoryDb,orderDb,bannerDb,cartDb,countryDb,cityDb,pincodeDb,stateDb,walletDb,walletTransactionDb,shippingDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const productFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  await productDb.count(productFilter);

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  await categoryDb.count(categoryFilter);

    const orderFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  await orderDb.count(orderFilter);

    const bannerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ sellerId : { '$in' : userIds } }] };
    const bannerCnt =  await bannerDb.count(bannerFilter);

    const cartFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartCnt =  await cartDb.count(cartFilter);

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const countryCnt =  await countryDb.count(countryFilter);

    const cityFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cityCnt =  await cityDb.count(cityFilter);

    const pincodeFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);

    const stateFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const stateCnt =  await stateDb.count(stateFilter);

    const walletFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletCnt =  await walletDb.count(walletFilter);

    const walletTransactionFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletTransactionCnt =  await walletTransactionDb.count(walletTransactionFilter);

    const shippingFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const shippingCnt =  await shippingDb.count(shippingFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  await roleDb.count(roleFilter);

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  await projectRouteDb.count(projectRouteFilter);

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      user :userCnt + 1,
      product :productCnt ,
      category :categoryCnt ,
      order :orderCnt ,
      banner :bannerCnt ,
      cart :cartCnt ,
      country :countryCnt ,
      city :cityCnt ,
      pincode :pincodeCnt ,
      state :stateCnt ,
      wallet :walletCnt ,
      walletTransaction :walletTransactionCnt ,
      shipping :shippingCnt ,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,productDb,categoryDb,orderDb,bannerDb,cartDb,countryDb,cityDb,pincodeDb,stateDb,walletDb,walletTransactionDb,shippingDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.deleteMany(userFilter));

    const productFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  (await productDb.deleteMany(productFilter));

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.deleteMany(categoryFilter));

    const orderFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.deleteMany(orderFilter));

    const bannerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ sellerId : { '$in' : userIds } }] };
    const bannerCnt =  (await bannerDb.deleteMany(bannerFilter));

    const cartFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartCnt =  (await cartDb.deleteMany(cartFilter));

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const countryCnt =  (await countryDb.deleteMany(countryFilter));

    const cityFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cityCnt =  (await cityDb.deleteMany(cityFilter));

    const pincodeFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const pincodeCnt =  (await pincodeDb.deleteMany(pincodeFilter));

    const stateFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const stateCnt =  (await stateDb.deleteMany(stateFilter));

    const walletFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletCnt =  (await walletDb.deleteMany(walletFilter));

    const walletTransactionFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletTransactionCnt =  (await walletTransactionDb.deleteMany(walletTransactionFilter));

    const shippingFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const shippingCnt =  (await shippingDb.deleteMany(shippingFilter));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.deleteMany(userTokensFilter));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.deleteMany(roleFilter));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.deleteMany(projectRouteFilter));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.deleteMany(userRoleFilter));
    let deleted = (await userDb.deleteMany(filter));
    let result = {
      user :userCnt + deleted,
      product :productCnt ,
      category :categoryCnt ,
      order :orderCnt ,
      banner :bannerCnt ,
      cart :cartCnt ,
      country :countryCnt ,
      city :cityCnt ,
      pincode :pincodeCnt ,
      state :stateCnt ,
      wallet :walletCnt ,
      walletTransaction :walletTransactionCnt ,
      shipping :shippingCnt ,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,productDb,categoryDb,orderDb,bannerDb,cartDb,countryDb,cityDb,pincodeDb,stateDb,walletDb,walletTransactionDb,shippingDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.updateMany(userFilter,updateBody));

    const productFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  (await productDb.updateMany(productFilter,updateBody));

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.updateMany(categoryFilter,updateBody));

    const orderFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.updateMany(orderFilter,updateBody));

    const bannerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ sellerId : { '$in' : userIds } }] };
    const bannerCnt =  (await bannerDb.updateMany(bannerFilter,updateBody));

    const cartFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartCnt =  (await cartDb.updateMany(cartFilter,updateBody));

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const countryCnt =  (await countryDb.updateMany(countryFilter,updateBody));

    const cityFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cityCnt =  (await cityDb.updateMany(cityFilter,updateBody));

    const pincodeFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const pincodeCnt =  (await pincodeDb.updateMany(pincodeFilter,updateBody));

    const stateFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const stateCnt =  (await stateDb.updateMany(stateFilter,updateBody));

    const walletFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletCnt =  (await walletDb.updateMany(walletFilter,updateBody));

    const walletTransactionFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletTransactionCnt =  (await walletTransactionDb.updateMany(walletTransactionFilter,updateBody));

    const shippingFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const shippingCnt =  (await shippingDb.updateMany(shippingFilter,updateBody));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.updateMany(userTokensFilter,updateBody));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.updateMany(roleFilter,updateBody));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.updateMany(projectRouteFilter,updateBody));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.updateMany(userRoleFilter,updateBody));
    let updated = (await userDb.updateMany(filter,updateBody));
    let result = {
      user :userCnt + updated,
      product :productCnt ,
      category :categoryCnt ,
      order :orderCnt ,
      banner :bannerCnt ,
      cart :cartCnt ,
      country :countryCnt ,
      city :cityCnt ,
      pincode :pincodeCnt ,
      state :stateCnt ,
      wallet :walletCnt ,
      walletTransaction :walletTransactionCnt ,
      shipping :shippingCnt ,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
