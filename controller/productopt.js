const {productOption}=require("../model/productOption")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

module.exports.StoreproductOptions=catchAsyncError(async(req, res,next)=>{
    const storeproductOption=await productOption.find({org_id:req.params.org_id})
  if(!storeproductOption){
        return next(new ErrorHandler(' storeproductOption Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get storeproductOption Successfully!',
              storeproductOption
          })
              
 
  })