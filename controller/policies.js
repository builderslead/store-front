const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")
const {police}=require("../model/police")

module.exports.Storepolice=catchAsyncError(async(req, res,next)=>{
    const Storepolice=await police.findOne({org_id:req.params.org_id})
  if(!Storepolice){
        return next(new ErrorHandler(' Storepolice Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get Storepolice Successfully!',
              Storepolice
          })
              
 
  })