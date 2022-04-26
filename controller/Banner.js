const {banner}=require("../model/banners")

const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

exports.storeBanner=catchAsyncError(async(req, res,next)=>{
    const store_banner=await banner.find({org_id:req.query.org_id})
  if(!store_banner){
    return next(new ErrorHandler('store banner Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get Store banner Successfully!',
              store_banner
          })
              
 
  })