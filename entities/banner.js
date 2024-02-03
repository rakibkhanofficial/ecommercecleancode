module.exports = (banner) => {

  let newBanner = { 
    bannerTitle: banner.bannerTitle,
    alternateTitle: banner.alternateTitle,
    startDate: banner.startDate,
    endDate: banner.endDate,
    images: banner.images,
    redirectLink: banner.redirectLink,
    isActive: banner.isActive,
    createdAt: banner.createdAt,
    updatedAt: banner.updatedAt,
    addedBy: banner.addedBy,
    updatedBy: banner.updatedBy,
    sellerId: banner.sellerId,
    isDeleted: banner.isDeleted,
  };

  // remove undefined values
  Object.keys(newBanner).forEach(key => newBanner[key] === undefined && delete newBanner[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newBanner) => {
   *   if (!newBanner.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newBanner) 
   */

  return Object.freeze(newBanner);
};
