const response = require('../../utils/response');
const mongoose = require('mongoose');

const getRoleAccess = ({
  userRoleDb,routeRoleDb 
})=> async (userId) => {
  let userRole = await userRoleDb.findMany({ userId: userId },{ pagination:false });
  let routeRole = await routeRoleDb.findMany({ roleId: { $in: userRole ? userRole.map(u=>u.roleId) : [] } },{
    populate:['roleId','routeId'],
    pagination:false 
  });
  let models = mongoose.modelNames();
  let roles = routeRole ? routeRole.map(rr => rr.roleId && rr.roleId.name).filter((value, index, self) => self.indexOf(value) === index) : [];
  let roleAccess = {};
  if (roles.length){
    roles.map(role => {
      roleAccess[role] = {};
      models.forEach(model => {
        if (routeRole && routeRole.length) {
          routeRole.map(rr => {
            if (rr.routeId && rr.routeId.uri.includes(`/${model.toLowerCase()}/`) && rr.roleId && rr.roleId.name === role) {
              if (!roleAccess[role][model]) {
                roleAccess[role][model] = [];
              }
              if (rr.routeId.uri.includes('create') && !roleAccess[role][model].includes('C')) {
                roleAccess[role][model].push('C');
              }
              else if (rr.routeId.uri.includes('list') && !roleAccess[role][model].includes('R')) {
                roleAccess[role][model].push('R');
              }
              else if (rr.routeId.uri.includes('update') && !roleAccess[role][model].includes('U')) {
                roleAccess[role][model].push('U');
              }
              else if (rr.routeId.uri.includes('delete') && !roleAccess[role][model].includes('D')) {
                roleAccess[role][model].push('D');
              }
            }
          });
        }
      });
    });
  }
  return response.success({ data: roleAccess });
};

module.exports = getRoleAccess;