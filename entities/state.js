module.exports = (state) => {

  let newState = { 
    stateName: state.stateName,
    countryId: state.countryId,
    isActive: state.isActive,
    createdAt: state.createdAt,
    updatedAt: state.updatedAt,
    addedBy: state.addedBy,
    updatedBy: state.updatedBy,
    isDeleted: state.isDeleted,
  };

  // remove undefined values
  Object.keys(newState).forEach(key => newState[key] === undefined && delete newState[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newState) => {
   *   if (!newState.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newState) 
   */

  return Object.freeze(newState);
};
