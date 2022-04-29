const {wishlist}=require("../model/customerWishlist")


const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorhandler=require("../errorhandler/errhandler")


exports.getCustomerWishlist=catchAsyncError(async(req, res,next)=>{
    const wishlists=await wishlist.find({org_id:req.params.org_id})
  if(!wishlists){
        return next(new errorhandler('Data not found!',404))
    }

            res.status(200).json({
              success:true,
              message:'Get customer wishlist Successfully!',
              wishlists
          })
              
 
  })

exports.createCostumerWishlist=catchAsyncError(async(req,res)=>{
        const createWishlist={
            org_id:req.body.org_id,
            version:req.body.version,
            data:req.body.data,
            status:req.body.status,
            metadata:req.body.metadata,
            notes:req.body.notes,
            created_data:req.body.created_data
        }
        const insertdata=await wishlist.create(createWishlist)
            res.json({
                status:201,
                message:"New Create customerWishlist",
                Data:insertdata 
            })
})
