module.exports = (city) => {

  let newCity = { 
    cityName: city.cityName,
    stateId: city.stateId,
    isActive: city.isActive,
    createdAt: city.createdAt,
    updatedAt: city.updatedAt,
    addedBy: city.addedBy,
    updatedBy: city.updatedBy,
    isDeleted: city.isDeleted,
  };

  // remove undefined values
  Object.keys(newCity).forEach(key => newCity[key] === undefined && delete newCity[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCity) => {
   *   if (!newCity.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCity) 
   */

  return Object.freeze(newCity);
};
