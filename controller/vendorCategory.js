const catchAsyncError = require("../errorhandler/chatchasyncerror");
const ErrorHandler = require("../errorhandler/errhandler");

const { vendor } = require("../model/vendor");
module.exports.storeVendorCategory = catchAsyncError(async (req, res, next) => {
        const Store_vendor = await vendor.find({ org_id:req.params.org_id });
        if (!Store_vendor) {
            return next(new ErrorHandler(" vendor Not Found!", 404));
        }
        res.status(200).json({
            success: true,
            message: "Get Store vendor Successfully!",
            Store_vendor,
        });
});