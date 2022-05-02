const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorHandler = require("../errorhandler/errhandler");

const { vendor } = require("../model/vendor");
module.exports.storeVendorCategory = catchAsyncError(async (req, res, next) => {
  const storeVendor = await vendor.find({});
  if (!storeVendor) {
    return next(new errorHandler(" vendor Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get store vendor Successfully!",
    storeVendor,
  });
});
