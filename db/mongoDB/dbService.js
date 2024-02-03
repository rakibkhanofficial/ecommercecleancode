const mongoDbService = (Model) => {
  // for create one as well as create many
  const create = (data) => new Promise((resolve, reject) => {
    Model.create(data, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // update single document that will return updated document
  const updateOne = (filter, data, options = { new: true }) => new Promise((resolve, reject) => {
    Model.findOneAndUpdate(filter, data, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // delete single document that will return updated document
  const deleteOne = (filter, options = { new: true }) => new Promise((resolve, reject) => {
    Model.findOneAndDelete(filter, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // update multiple documents and returns count
  const updateMany = (filter, data) => new Promise((resolve, reject) => {
    Model.updateMany(filter, data, (error, result) => {
      if (error) reject(error);
      else resolve(result.modifiedCount);
    });
  });

  // delete multiple documents and returns count
  const deleteMany = (filter, data) => new Promise((resolve, reject) => {
    Model.deleteMany(filter, data, (error, result) => {
      if (error) reject(error);
      else resolve(result.deletedCount);
    });
  });

  // find single document by query
  const findOne = (filter) => new Promise((resolve, reject) => {
    Model.findOne(filter, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // find multiple documents
  const findMany = (filter) => new Promise((resolve, reject) => {
    Model.find(filter, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // count documents
  const count = (filter) => new Promise((resolve, reject) => {
    Model.countDocuments(filter, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // find documents with pagination
  const paginate = (filter, options) => new Promise((resolve, reject) => {
    Model.paginate(filter, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  return Object.freeze({
    create,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    findOne,
    findMany,
    count,
    paginate,
  });
};

module.exports = mongoDbService;
