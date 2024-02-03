const response = require('../../utils/response');

const getDependencyCount = ({
  cityDb,pincodeDb
})=> async (filter) =>{
  let city = await cityDb.findMany(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);
    let result = { pincode :pincodeCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  city : 0 }
    });
  }
};

const deleteWithDependency = ({
  cityDb,pincodeDb
})=> async (filter) =>{
  let city = await cityDb.findMany(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const pincodeCnt =  (await pincodeDb.deleteMany(pincodeFilter));
    let deleted = (await cityDb.deleteMany(filter));
    let result = { pincode :pincodeCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  city : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  cityDb,pincodeDb
}) => async (filter,updateBody) =>{
  let city = await cityDb.findMany(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const pincodeCnt =  (await pincodeDb.updateMany(pincodeFilter,updateBody));
    let updated = (await cityDb.updateMany(filter,updateBody));
    let result = { pincode :pincodeCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  city : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
