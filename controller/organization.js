const { organization } = require("../model/organization");
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorhandler = require("../errorhandler/errhandler");
const customers = require("../model/customer");

exports.Organization = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const OrganizationsDetails = await organization.findById(id);
  if (!OrganizationsDetails) {
    return next(new errorhandler("Data not found!", 404));
  }

  res.status(200).json({
    success: true,
    message: "Get Organizations Successfully!",
    OrganizationsDetails,
  });
});


