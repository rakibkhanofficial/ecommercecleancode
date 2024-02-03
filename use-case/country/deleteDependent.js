const response = require('../../utils/response');

const getDependencyCount = ({
  countryDb,pincodeDb,stateDb
})=> async (filter) =>{
  let country = await countryDb.findMany(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);

    const stateFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const stateCnt =  await stateDb.count(stateFilter);
    let result = {
      pincode :pincodeCnt ,
      state :stateCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  country : 0 }
    });
  }
};

const deleteWithDependency = ({
  countryDb,pincodeDb,stateDb
})=> async (filter) =>{
  let country = await countryDb.findMany(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const pincodeCnt =  (await pincodeDb.deleteMany(pincodeFilter));

    const stateFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const stateCnt =  (await stateDb.deleteMany(stateFilter));
    let deleted = (await countryDb.deleteMany(filter));
    let result = {
      pincode :pincodeCnt ,
      state :stateCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  country : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  countryDb,pincodeDb,stateDb
}) => async (filter,updateBody) =>{
  let country = await countryDb.findMany(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const pincodeCnt =  (await pincodeDb.updateMany(pincodeFilter,updateBody));

    const stateFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const stateCnt =  (await stateDb.updateMany(stateFilter,updateBody));
    let updated = (await countryDb.updateMany(filter,updateBody));
    let result = {
      pincode :pincodeCnt ,
      state :stateCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  country : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
