const {Promo}=require("../model/promocode")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorhandler=require("../errorhandler/errhandler")


exports.promocodeArray=catchAsyncError(async(req, res,next)=>{
    const categories=await Promo.findOne({org_id:req.query.org_id})
  if(!categories){
        return next(new errorhandler('promo Data not found!',404))
    }

            res.status(200).json({
              success:true,
              message:'Get promo Successfully!',
              categories
          })
              
 
  })
