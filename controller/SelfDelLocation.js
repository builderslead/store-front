const {selfdellocation}=require("../model/selfDelevarylocation")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

module.exports.storeSelfDelLocation=catchAsyncError(async(req, res)=>{
    const storelocation=await selfdellocation.find({org_id:req.query.org_id})
  if(!storelocation){
        return next(new ErrorHandler(' selfDellocation Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get selfDelLocation Successfully!',
              storelocation
          })
              
 
  })