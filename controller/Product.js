const { collection } = require("../model/category");
const { Products } = require("../model/product");
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorHandler = require("../errorhandler/errhandler");

module.exports.storeProduct = catchAsyncError(async (req, res, next) => {
  const storeProducts = await Products.find({ org_id: req.query.org_id });
  if (!storeProducts) {
    return next(new errorHandler("storeProducts Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get storeProducts Successfully!",
    storeProducts,
  });
});

exports.storeProductBYID = catchAsyncError(async (req, res, next) => {
  const storeProduct = await Products.findById({ _id: req.params._id });
  if (!storeProduct) {
    return next(new errorHandler("Data not found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "storeProduct Successfully!",
    productDetails: [storeProduct],
  });
});

module.exports.storeBestsellers = catchAsyncError(async (req, res, next) => {
  const storeBestseller = await Products.find({ org_id: req.params.org_id });
  // console.log(storeBestseller.data.tags.bestseller,"hello");
  console.log(storeBestseller.length);
  for (i = 0; storeBestseller.length; i++) {
    if (storeBestseller[i].data.tags.bestseller === true) {
      return res.status(200).json({
        success: true,
        message: "Get storeBestseller Successfully!",
        storeBestseller,
      });
    } else {
      return next(new errorHandler("data not Found!", 404));
    }
  }

  res.status(404).json({
    success: false,
    message: "bad request",
  });
});

module.exports.storeFeatured = catchAsyncError(async (req, res, next) => {

  const featured = await Products.find({
    org_id: req.params.org_id,
    "data.tags.featured": true,
  });
  if (featured) {
    return res.status(200).json({
      success: true,
      message: "storeFeatured Successfully!",
      featured,
    });
  }
  res.send({
    success: false,
    status: 400,
    message: "data not exist",
  });
});

module.exports.storeNew_arrival = catchAsyncError(async (req, res, next) => {
  const new_arrival = await Products.find({
    org_id: req.params.org_id});
    for (i = 0; new_arrival.length; i++) {
      if (new_arrival[i].data.tags.new_arrival === true) {
        return res.status(200).json({
          success: true,
          message: "new_arrival Successfully!",
          new_arrival,
        });
      }
        res.send({
          success: false,
          status: 400,
          message: "data not exist",
        });
    }
  });

 

module.exports.allCategoriesProduct = catchAsyncError(
  async (req, res, next) => {
    const category = await collection.findOne({ uid: req.query.uid });
    const product = await Products.find({
      org_id: req.query.org_id,
      "data.collection": parseInt(req.query.uid),
    });

    console.log(product.length, "hello");
    if (category.status === "active") {
      return res.status(200).json({
        success: true,
        message: "Get store category of product Successfully!",
        product,
      });
    }

    res.status(404).json({
      success: false,
      message: "data not found",
    });
  }
);
