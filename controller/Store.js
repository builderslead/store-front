const catchAsyncError=require("../errorhandler/chatchasyncerror")

const {store}=require("../model/store")
module.exports.storelocationArray=catchAsyncError(async(req, res,next)=>{
    const storeArray=await store.findOne({org_id:req.query.org_id})
  if(!storeArray){
        // return next(new errorhandler('promo Data not found!',404))
       return res.send({
            statusCode:404,
            success:false,
            message:'Store Location Not Found!'
        })
    }

            res.status(200).json({
              success:true,
              message:'Get Store Location Successfully!',
              store:storeArray
          })
              
 
  })