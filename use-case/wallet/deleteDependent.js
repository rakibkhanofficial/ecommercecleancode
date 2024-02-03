const response = require('../../utils/response');

const getDependencyCount = ({
  walletDb,walletTransactionDb
})=> async (filter) =>{
  let wallet = await walletDb.findMany(filter);
  if (wallet.length){
    let walletIds = wallet.map((obj) => obj.id);

    const walletTransactionFilter = { '$or': [{ walletId : { '$in' : walletIds } }] };
    const walletTransactionCnt =  await walletTransactionDb.count(walletTransactionFilter);
    let result = { walletTransaction :walletTransactionCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  wallet : 0 }
    });
  }
};

const deleteWithDependency = ({
  walletDb,walletTransactionDb
})=> async (filter) =>{
  let wallet = await walletDb.findMany(filter);
  if (wallet.length){
    let walletIds = wallet.map((obj) => obj.id);

    const walletTransactionFilter = { '$or': [{ walletId : { '$in' : walletIds } }] };
    const walletTransactionCnt =  (await walletTransactionDb.deleteMany(walletTransactionFilter));
    let deleted = (await walletDb.deleteMany(filter));
    let result = { walletTransaction :walletTransactionCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  wallet : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  walletDb,walletTransactionDb
}) => async (filter,updateBody) =>{
  let wallet = await walletDb.findMany(filter);
  if (wallet.length){
    let walletIds = wallet.map((obj) => obj.id);

    const walletTransactionFilter = { '$or': [{ walletId : { '$in' : walletIds } }] };
    const walletTransactionCnt =  (await walletTransactionDb.updateMany(walletTransactionFilter,updateBody));
    let updated = (await walletDb.updateMany(filter,updateBody));
    let result = { walletTransaction :walletTransactionCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  wallet : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
