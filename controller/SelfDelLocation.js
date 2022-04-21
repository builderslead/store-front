const {selfdellocation}=require("../model/selfDelevarylocation")
const catchAsyncError=require("../errorhandler/chatchasyncerror")

module.exports.storeSelfDelLocation=catchAsyncError(async(req, res)=>{
    const storelocation=await selfdellocation.find({org_id:req.query.org_id})
  if(!storelocation){
        // return next(new ErrorHandler('Category Data not found!',404))
       return res.send({
            statusCode:404,
            success:false,
            message:'selfDellocation Not Found!'
        })
    }
            res.status(200).json({
              success:true,
              message:'Get selfDelLocation Successfully!',
              storelocation
          })
              
 
  })