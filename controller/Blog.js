const catchAsyncError = require("../errorhandler/chatchasyncerror");
const ErrorHandler = require("../errorhandler/errhandler");

const { blogs } = require("../model/blogs");
module.exports.store_blogs = catchAsyncError(async (req, res, next) => {
  const Store_blogs = await blogs.find({ org_id: req.params.org_id });
  if (!Store_blogs) {
    return next(new ErrorHandler(" Store blogs Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get Store Blogs Successfully!",
    Store_blogs,
  });
});

module.exports.storeBlogDetails = catchAsyncError(async (req, res, next) => {
  const storeBlogDetail = await blogs.find({ id: req.params._id });
  if (!storeBlogDetail) {
    return next(new ErrorHandler(" Store blogs Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get Store blogs Successfully!",
    storeBlogDetail,
  });
});
