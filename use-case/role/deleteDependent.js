const response = require('../../utils/response');

const getDependencyCount = ({
  roleDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let role = await roleDb.findMany(filter);
  if (role.length){
    let roleIds = role.map((obj) => obj.id);

    const routeRoleFilter = { '$or': [{ roleId : { '$in' : roleIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);

    const userRoleFilter = { '$or': [{ roleId : { '$in' : roleIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
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
      data: {  role : 0 }
    });
  }
};

const deleteWithDependency = ({
  roleDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let role = await roleDb.findMany(filter);
  if (role.length){
    let roleIds = role.map((obj) => obj.id);

    const routeRoleFilter = { '$or': [{ roleId : { '$in' : roleIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));

    const userRoleFilter = { '$or': [{ roleId : { '$in' : roleIds } }] };
    const userRoleCnt =  (await userRoleDb.deleteMany(userRoleFilter));
    let deleted = (await roleDb.deleteMany(filter));
    let result = {
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
      data: {  role : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  roleDb,routeRoleDb,userRoleDb
}) => async (filter,updateBody) =>{
  let role = await roleDb.findMany(filter);
  if (role.length){
    let roleIds = role.map((obj) => obj.id);

    const routeRoleFilter = { '$or': [{ roleId : { '$in' : roleIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));

    const userRoleFilter = { '$or': [{ roleId : { '$in' : roleIds } }] };
    const userRoleCnt =  (await userRoleDb.updateMany(userRoleFilter,updateBody));
    let updated = (await roleDb.updateMany(filter,updateBody));
    let result = {
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
      data: {  role : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
