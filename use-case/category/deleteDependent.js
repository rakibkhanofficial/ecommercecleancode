const response = require('../../utils/response');

const getDependencyCount = ({
  categoryDb,productDb
})=> async (filter) =>{
  let category = await categoryDb.findMany(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const productFilter = { '$or': [{ category : { '$in' : categoryIds } },{ subCategory : { '$in' : categoryIds } }] };
    const productCnt =  await productDb.count(productFilter);

    const categoryFilter = { '$or': [{ parentCategoryId : { '$in' : categoryIds } }] };
    const categoryCnt =  await categoryDb.count(categoryFilter);
    let result = {
      product :productCnt ,
      category :categoryCnt + 1,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  category : 0 }
    });
  }
};

const deleteWithDependency = ({
  categoryDb,productDb
})=> async (filter) =>{
  let category = await categoryDb.findMany(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const productFilter = { '$or': [{ category : { '$in' : categoryIds } },{ subCategory : { '$in' : categoryIds } }] };
    const productCnt =  (await productDb.deleteMany(productFilter));

    const categoryFilter = { '$or': [{ parentCategoryId : { '$in' : categoryIds } }] };
    const categoryCnt =  (await categoryDb.deleteMany(categoryFilter));
    let deleted = (await categoryDb.deleteMany(filter));
    let result = {
      product :productCnt ,
      category :categoryCnt + deleted,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  category : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  categoryDb,productDb
}) => async (filter,updateBody) =>{
  let category = await categoryDb.findMany(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const productFilter = { '$or': [{ category : { '$in' : categoryIds } },{ subCategory : { '$in' : categoryIds } }] };
    const productCnt =  (await productDb.updateMany(productFilter,updateBody));

    const categoryFilter = { '$or': [{ parentCategoryId : { '$in' : categoryIds } }] };
    const categoryCnt =  (await categoryDb.updateMany(categoryFilter,updateBody));
    let updated = (await categoryDb.updateMany(filter,updateBody));
    let result = {
      product :productCnt ,
      category :categoryCnt + updated,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  category : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
