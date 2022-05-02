const { productOption } = require("../model/productOption");
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const ErrorHandler = require("../errorhandler/errhandler");

module.exports.storeProductOptions = catchAsyncError(async (req, res, next) => {
  const storeProductOption = await productOption.find({
    org_id: req.params.org_id,
  });
  if (!storeProductOption) {
    return next(new ErrorHandler("ProductOption Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get store ProductOption Successfully!",
    storeProductOption,
  });
});
