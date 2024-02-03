const response = require('../../utils/response');

const getDependencyCount = ({
  stateDb,cityDb,pincodeDb
})=> async (filter) =>{
  let state = await stateDb.findMany(filter);
  if (state.length){
    let stateIds = state.map((obj) => obj.id);

    const cityFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const cityCnt =  await cityDb.count(cityFilter);

    const pincodeFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);
    let result = {
      city :cityCnt ,
      pincode :pincodeCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  state : 0 }
    });
  }
};

const deleteWithDependency = ({
  stateDb,cityDb,pincodeDb
})=> async (filter) =>{
  let state = await stateDb.findMany(filter);
  if (state.length){
    let stateIds = state.map((obj) => obj.id);

    const cityFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const cityCnt =  (await cityDb.deleteMany(cityFilter));

    const pincodeFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const pincodeCnt =  (await pincodeDb.deleteMany(pincodeFilter));
    let deleted = (await stateDb.deleteMany(filter));
    let result = {
      city :cityCnt ,
      pincode :pincodeCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  state : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  stateDb,cityDb,pincodeDb
}) => async (filter,updateBody) =>{
  let state = await stateDb.findMany(filter);
  if (state.length){
    let stateIds = state.map((obj) => obj.id);

    const cityFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const cityCnt =  (await cityDb.updateMany(cityFilter,updateBody));

    const pincodeFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const pincodeCnt =  (await pincodeDb.updateMany(pincodeFilter,updateBody));
    let updated = (await stateDb.updateMany(filter,updateBody));
    let result = {
      city :cityCnt ,
      pincode :pincodeCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  state : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
