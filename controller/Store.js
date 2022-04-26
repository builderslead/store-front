const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

const {store}=require("../model/store")
module.exports.storeLocationArray=catchAsyncError(async(req, res,next)=>{
    const storeArray=await store.findOne({org_id:req.query.org_id})
  if(!storeArray){
        return next(new ErrorHandler('Store Location Not Found!',404))
    }

            res.status(200).json({
              success:true,
              message:'Get Store Location Successfully!',
              store:storeArray
          })
              
 
  })