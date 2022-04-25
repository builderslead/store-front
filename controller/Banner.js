const {banner}=require("../model/banners")

const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

exports.Storebanner=catchAsyncError(async(req, res,next)=>{
    const Storebanner=await banner.find({org_id:req.query.org_id})
  if(!Storebanner){
    return next(new ErrorHandler(' Storebanner Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get Storebanner Successfully!',
              Storebanner
          })
              
 
  })