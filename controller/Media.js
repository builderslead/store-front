const {media}=require("../model/mediaschema")
const ApiFeatures=require("../search/apiffeatures")

const catchAsyncError=require("../errorhandler/chatchasyncerror")

const Storemedia=catchAsyncError(async(req, res)=>{
    // const org_id=req.query.org_id
    const mediadata=await media.findOne({org_id:req.query.org_id})
  if(!mediadata){
        // return next(new ErrorHandler('Category Data not found!',404))
       return res.send({
            statusCode:404,
            success:false,
            message:'Media Not Found!'
        })
    }

            res.status(200).json({
              success:true,
              message:'Get Media Successfully!',
              mediadata
          })
              
 
  })
module.exports={Storemedia}