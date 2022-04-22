const { collection } = require('../model/product')
const Products=require('../model/product')
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorhandler=require("../errorhandler/errhandler")



const storeProductBYID=async(req,res)=>{
 
    try{
        const id=req.query.id
        const productDetails=await Products.findById(id)
            res.json({
                status:200,
                message:"Get category List",
                productDetails:productDetails
            })
        
    }catch(err){
        console.log(err);
        res.json({
            status:404,
            sueccs:false,
            message:'data Not Found!hu6r'
        })
    }
}


const All_CategoryOfProduct=catchAsyncError(async(req,res)=>{
        // const _id=req.query._id
        // const org_id=req.query.org_id
        const user=await Products.find().populate("org_id").exec()
        if(!user){
            return next(new errorhandler('category Data not found!',404))
        }
    
                res.status(200).json({
                  success:true,
                  message:'Get category od product Successfully!',
                  user
              })
                  
     
      })

module.exports={All_CategoryOfProduct,storeProductBYID}

