const { collection } = require("../model/product");
const {Products} = require("../model/product");
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorHandler = require("../errorhandler/errhandler");

module.exports.storeProduct= catchAsyncError(async (req, res, next) => {
  const storeProducts = await Products.find({org_id:req.query.org_id });
  if (!storeProducts) {
    return next(new errorHandler("storeProducts Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get storeProducts Successfully!",
    storeProducts,
  });
});

exports.storeProductBYID=catchAsyncError(async(req, res,next)=>{
  const storeProduct=await Products.findById({_id:req.params._id})
  if(!storeProduct){
        return next(new errorHandler('Data not found!',404))
    }
            res.status(200).json({
              success:true,
              message:'storeProduct Successfully!',
              productDetails:[storeProduct]
          })        

  })





module.exports.storeBestsellers = catchAsyncError(async (req, res, next) => {
  const storeBestseller = await Products.findOne({org_id:req.query.org_id});
  console.log(storeBestseller.data.tags.bestseller,"hello");

  if (storeBestseller.data.tags.bestseller === true) {
    return res.status(200).json({
      success: true,
      message: "Get storeBestseller Successfully!",
      storeBestseller:[storeBestseller],
    });
  }
  res.status(404).json({
    success: false,
    message: "data not found",
  });
});


module.exports.storeFeatured= catchAsyncError(async (req, res, next) => {
  const storeFeatured = await Products.findOne({org_id:req.params.org_id});
  console.log(storeFeatured.data.tags.featured,"hello");

  if (storeFeatured.data.tags.new_arrival === false) {
    return res.status(200).json({
      success: true,
      message: "storeFeatured Successfully!",
      storeFeatured:[storeFeatured],
    });
  }
  res.status(404).json({
    success: false,
    message: "data not found",
  });
});

module.exports.storeNew_arrival = catchAsyncError(async (req, res, next) => {
  const new_arrival = await Products.findOne({org_id:req.params.org_id});
  // console.log(Storefeatured.data.tags.featured,"hello");

  if (new_arrival.data.tags.new_arrival === false) {
    return res.status(200).json({
      success: true,
      message: "Get Store product new_arrival Successfully!",
      new_arrival:[new_arrival],
    });
  }
  res.status(404).json({
    success: false,
    message: "Product new_arrival not found",
  });
});

module.exports.allCategoriesProduct=catchAsyncError(async (req, res, next) => {                            
const storeBestseller = await Products.find({$or:[{org_id:req.query.org_id},{"data.collection":req.query.uid}]});
  // console.log(storeBestseller.data.tags.bestseller,"hello");

  if (storeBestseller.data.collection===695649) {
    return res.status(200).json({
      success: true,
      message: "Get storeBestseller Successfully!",
      storeBestseller:[storeBestseller],
    });
  }
  res.status(404).json({
    success: false,
    message: "data not found",
  });
});
