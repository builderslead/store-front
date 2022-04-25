const { collection } = require("../model/product");
const Products = require("../model/product");
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorhandler = require("../errorhandler/errhandler");

module.exports.storeProductsYORGid = catchAsyncError(async (req, res, next) => {
  const StoreProducts = await Products.find({ org_id: req.query.org_id });
  if (!StoreProducts) {
    return next(new ErrorHandler(" StoreProducts Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get StoreProducts Successfully!",
    StoreProducts,
  });
});

module.exports.storeProductBYID = async (req, res) => {
  try {
    const id = req.query.id;
    const productDetails = await Products.findById(id);
    res.json({
      status: 200,
      message: "Get category List",
      productDetails: productDetails,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: 404,
      sueccs: false,
      message: "data Not Found!hu6r",
    });
  }
};

module.exports.All_CategoryOfProduct = catchAsyncError(async (req, res) => {
  // const _id=req.query._id
  // const org_id=req.query.org_id
  const user = await Products.find().populate("org_id").exec();
  if (!user) {
    return next(new errorhandler("category Data not found!", 404));
  }

  res.status(200).json({
    success: true,
    message: "Get category od product Successfully!",
    user,
  });
});


module.exports.storeBestsellers = catchAsyncError(async (req, res, next) => {
  const StoreBestseller = await Products.findOne({org_id:req.params.org_id});
  // console.log(StoreBestseller.data.tags.bestseller,"hello");

  if (StoreBestseller.data.tags.bestseller === true) {
    return res.status(200).json({
      success: true,
      message: "Get StoreBestseller Successfully!",
      Storefeatured,
    });
  }
  res.status(404).json({
    success: false,
    message: "data not found",
  });
});

module.exports.storefeatured = catchAsyncError(async (req, res, next) => {
  const Storefeatured = await Products.findOne({org_id:req.params.org_id});
  // console.log(Storefeatured.data.tags.featured,"hello");

  if (Storefeatured.data.tags.featured === true) {
    return res.status(200).json({
      success: true,
      message: "Get Store product featured Successfully!",
      Storefeatured,
    });
  }
  res.status(404).json({
    success: false,
    message: "Product feature not found",
  });
});

module.exports.storeNew_arrival = catchAsyncError(async (req, res, next) => {
  const new_arrival = await Products.findOne({org_id:req.params.org_id});
  // console.log(Storefeatured.data.tags.featured,"hello");

  if (new_arrival.data.tags.new_arrival === false) {
    return res.status(200).json({
      success: true,
      message: "Get Store product new_arrival Successfully!",
      new_arrival,
    });
  }
  res.status(404).json({
    success: false,
    message: "Product new_arrival not found",
  });
});
