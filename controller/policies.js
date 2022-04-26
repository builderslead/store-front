const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")
const {police}=require("../model/police")

module.exports.storePolicies=catchAsyncError(async(req, res,next)=>{
  const Policies=await police.findOne({org_id:req.params.org_id})
  if(!Policies){
        return next(new ErrorHandler('Policies Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get store Policies Successfully!',
              Policies
          })
              
 
  })