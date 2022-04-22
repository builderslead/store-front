const catchAsyncError=require("../errorhandler/chatchasyncerror")
const ErrorHandler=require("../errorhandler/errhandler")

const {supplier}=require("../model/suppliers")
module.exports.Storesuppliers=catchAsyncError(async(req, res,next)=>{
    const Storesupplier=await supplier.find({org_id:req.params.org_id})
  if(!Storesupplier){
        return next(new ErrorHandler(' Storesupplier Not Found!',404))
    }
            res.status(200).json({
              success:true,
              message:'Get Storesupplier Successfully!',
              Storesupplier
          })
              
 
  })