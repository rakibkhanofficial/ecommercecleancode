const response = require('../../utils/response');

const getDependencyCount = ({
  projectRouteDb,routeRoleDb
})=> async (filter) =>{
  let projectRoute = await projectRouteDb.findMany(filter);
  if (projectRoute.length){
    let projectRouteIds = projectRoute.map((obj) => obj.id);

    const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectRouteIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);
    let result = { routeRole :routeRoleCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  projectRoute : 0 }
    });
  }
};

const deleteWithDependency = ({
  projectRouteDb,routeRoleDb
})=> async (filter) =>{
  let projectRoute = await projectRouteDb.findMany(filter);
  if (projectRoute.length){
    let projectRouteIds = projectRoute.map((obj) => obj.id);

    const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectRouteIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));
    let deleted = (await projectRouteDb.deleteMany(filter));
    let result = { routeRole :routeRoleCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  projectRoute : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  projectRouteDb,routeRoleDb
}) => async (filter,updateBody) =>{
  let projectRoute = await projectRouteDb.findMany(filter);
  if (projectRoute.length){
    let projectRouteIds = projectRoute.map((obj) => obj.id);

    const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectRouteIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));
    let updated = (await projectRouteDb.updateMany(filter,updateBody));
    let result = { routeRole :routeRoleCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  projectRoute : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
