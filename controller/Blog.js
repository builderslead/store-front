const catchAsyncError = require("../errorhandler/chatchasyncerror");
const ErrorHandler = require("../errorhandler/errhandler");

const { blogs } = require("../model/blogs");
module.exports.Store_blogs = catchAsyncError(async (req, res, next) => {
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

module.exports.StoreBlogDetails = catchAsyncError(async (req, res, next) => {
  const StoreBlogDetails = await blogs.find({ id: req.params._id });
  if (!StoreBlogDetails) {
    return next(new ErrorHandler(" Store blogs Not Found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get Store blogs Successfully!",
    StoreBlogDetails,
  });
});
