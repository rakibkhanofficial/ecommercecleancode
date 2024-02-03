module.exports = (country) => {

  let newCountry = { 
    countryName: country.countryName,
    phoneCode: country.phoneCode,
    isActive: country.isActive,
    createdAt: country.createdAt,
    updatedAt: country.updatedAt,
    addedBy: country.addedBy,
    updatedBy: country.updatedBy,
    isDeleted: country.isDeleted,
  };

  // remove undefined values
  Object.keys(newCountry).forEach(key => newCountry[key] === undefined && delete newCountry[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCountry) => {
   *   if (!newCountry.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCountry) 
   */

  return Object.freeze(newCountry);
};
