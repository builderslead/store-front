const {Promo}=require("../model/promocode")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorhandler=require("../errorhandler/errhandler")


exports.promoCodeArray=catchAsyncError(async(req, res,next)=>{
    const promoCode=await Promo.find({org_id:req.query.org_id})
  if(!promoCode){
        return next(new errorhandler('promo Data not found!',404))
    }

            res.status(200).json({
              success:true,
              message:'Get promo Successfully!',
              promoCode
          })        
 
  })
