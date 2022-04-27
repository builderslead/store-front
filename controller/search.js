// Story.find().populate("fans");
const { organization } = require("../model/organization");
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorHandler = require("../errorhandler/errhandler");

exports.searchQuery=catchAsyncError(async(req, res,next)=>{
    const vendors=await organization.find().populate("loaned_to");
    if(!vendors){
          return next(new errorHandler('Data not found!',404))
      }
  
              res.status(200).json({
                success:true,
                message:'vendors Successfully!',
                vendors
            })        
  
    })
  