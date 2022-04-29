const {UserCart}=require("../model/userCart")

const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorHandler=require("../middleware/middleware")

const createUserCart=catchAsyncError(async(req,res)=>{
        const createCart={
            org_id:req.body.org_id,
            version:req.body.version,
            data:req.body.data,
            status:req.body.status,
            metadata:req.body.metadata,
            notes:req.body.notes,
            created_at:new Date,
            created_data:req.body.created_data
        }
        const insertdata=await UserCart.insertMany(createCart)
            res.json({
                status:201,
                message:"New Create userCart",
                Data:insertdata 
            })
  
})

const storeUsercart=catchAsyncError(async(req, res)=>{
    
        const id=req.params._id
        const storeUserCart=await UserCart.findById(id)
        res.json({
            status:201,
            message:"Get userCart",
            storeUserCart:storeUserCart 
        })
  })

const update_userCart=(async(req,res)=>{
        const id=req.query.id
        const result =await UserCart.findByIdAndUpdate(id,{
            $set:{
            org_id:req.body.org_id,
            version:req.body.version,
            data:req.body.data,
            status:req.body.status,
            metadata:req.body.metadata,
            notes:req.body.notes,
            created_data:req.body.created_data
            } 
        })
        res.json({
            status:201,
            message:"update userCart Details"
        })
})
const deleteUserCart=catchAsyncError(async(req,res)=>{
        const id=req.params._id
        const result=await UserCart.findByIdAndDelete(id)
        res.json({
            status:201,
            message:"deleted userCart",
            
        })

    // }catch(err){
    //     res.json({
    //         status:400,
    //         message:"userCart not delete",
    //         error:err 
    //     })
    //     console.log(err);
    // }
})

module.exports={createUserCart,update_userCart,deleteUserCart,storeUsercart}