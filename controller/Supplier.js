const catchAsyncError = require("../errorhandler/chatchasyncerror");
const ErrorHandler = require("../errorhandler/errhandler");

const { supplier } = require("../model/suppliers");
module.exports.storeSupplier = catchAsyncError(async (req, res, next) => {
  const storeSuppliers = await supplier.find({ org_id: req.params.org_id });
  if (!storeSuppliers) {
    return next(new ErrorHandler("supplier Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get Store Supplier Successfully!",
    storeSuppliers,
  });
});
