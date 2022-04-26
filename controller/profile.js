const {Profile}=require("../model/profile")

const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

module.exports.storeProfileDetails=catchAsyncError(async(req, res,next)=>{
    const profileDetails=await Profile.find({org_id:req.params.org_id})
  if(!profileDetails){
        return next(new ErrorHandler('Profile details Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Store profile details Successfully!',
              profileDetails
          })
              
 
  })