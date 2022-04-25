const {Profile}=require("../model/profile")

const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

module.exports.StoreprofileDetails=catchAsyncError(async(req, res,next)=>{
    const profiledetails=await Profile.find({org_id:req.params.org_id})
  if(!profiledetails){
        return next(new ErrorHandler('profiledetails Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Store profiledetails Successfully!',
              profiledetails
          })
              
 
  })