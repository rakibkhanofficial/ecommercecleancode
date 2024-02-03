const shippingDb = require('../../../../data-access/shippingDb');

const shippingSchema = require('../../../../validation/schema/shipping');

const createValidation = require('../../../../validation')(shippingSchema.createSchema);
const updateValidation = require('../../../../validation')(shippingSchema.updateSchema);
const filterValidation = require('../../../../validation')(shippingSchema.filterValidationSchema);
const addShippingUsecase = require('../../../../use-case/shipping/addShipping')({
  shippingDb,
  createValidation 
});
const findAllShippingUsecase = require('../../../../use-case/shipping/findAllShipping')({
  shippingDb,
  filterValidation
});
const getShippingCountUsecase = require('../../../../use-case/shipping/getShippingCount')({
  shippingDb,
  filterValidation
});
const getShippingUsecase = require('../../../../use-case/shipping/getShipping')({
  shippingDb,
  filterValidation
});
const updateShippingUsecase = require('../../../../use-case/shipping/updateShipping')({
  shippingDb,
  updateValidation 
});
const partialUpdateShippingUsecase = require('../../../../use-case/shipping/partialUpdateShipping')({ shippingDb });
const softDeleteShippingUsecase = require('../../../../use-case/shipping/softDeleteShipping')({ shippingDb });
const softDeleteManyShippingUsecase = require('../../../../use-case/shipping/softDeleteManyShipping')({ shippingDb });
const bulkInsertShippingUsecase = require('../../../../use-case/shipping/bulkInsertShipping')({ shippingDb });
const bulkUpdateShippingUsecase = require('../../../../use-case/shipping/bulkUpdateShipping')({ shippingDb });
const deleteShippingUsecase = require('../../../../use-case/shipping/deleteShipping')({ shippingDb });
const deleteManyShippingUsecase = require('../../../../use-case/shipping/deleteManyShipping')({ shippingDb });

const shippingController = require('./shipping');

const addShipping = shippingController.addShipping(addShippingUsecase);
const findAllShipping = shippingController.findAllShipping(findAllShippingUsecase);
const getShippingCount = shippingController.getShippingCount(getShippingCountUsecase);
const getShippingById = shippingController.getShipping(getShippingUsecase);
const updateShipping = shippingController.updateShipping(updateShippingUsecase);
const partialUpdateShipping = shippingController.partialUpdateShipping(partialUpdateShippingUsecase);
const softDeleteShipping = shippingController.softDeleteShipping(softDeleteShippingUsecase);
const softDeleteManyShipping = shippingController.softDeleteManyShipping(softDeleteManyShippingUsecase);
const bulkInsertShipping = shippingController.bulkInsertShipping(bulkInsertShippingUsecase);
const bulkUpdateShipping = shippingController.bulkUpdateShipping(bulkUpdateShippingUsecase);
const deleteShipping = shippingController.deleteShipping(deleteShippingUsecase);
const deleteManyShipping = shippingController.deleteManyShipping(deleteManyShippingUsecase);

module.exports = {
  addShipping,
  findAllShipping,
  getShippingCount,
  getShippingById,
  updateShipping,
  partialUpdateShipping,
  softDeleteShipping,
  softDeleteManyShipping,
  bulkInsertShipping,
  bulkUpdateShipping,
  deleteShipping,
  deleteManyShipping,
};