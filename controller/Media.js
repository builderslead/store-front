const {media}=require("../model/mediaschema")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

const storeMedia=catchAsyncError(async(req, res,next)=>{
    const mediadata=await media.find({org_id:req.query.org_id})
  if(!mediadata){
        return next(new ErrorHandler('media Data not found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get Media Successfully!',
              mediadata
          })
              
 
  })
module.exports={storeMedia}