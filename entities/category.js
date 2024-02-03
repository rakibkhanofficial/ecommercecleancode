module.exports = (category) => {

  let newCategory = { 
    name: category.name,
    isActive: category.isActive,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
    addedBy: category.addedBy,
    updatedBy: category.updatedBy,
    parentCategoryId: category.parentCategoryId,
    isDeleted: category.isDeleted,
  };

  // remove undefined values
  Object.keys(newCategory).forEach(key => newCategory[key] === undefined && delete newCategory[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCategory) => {
   *   if (!newCategory.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCategory) 
   */

  return Object.freeze(newCategory);
};
