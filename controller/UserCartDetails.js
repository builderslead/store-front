const {UserCart}=require("../model/userCart")

const catchAsyncError=require("../errorhandler/chatchasyncerror")

const createUserCart=async(req,res)=>{
    try{
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
                message:"New Create UserCart",
                Data:insertdata 
            })
        }catch(err){
            res.json({
                status:400,
                message:"UserCart not added",
                error:err 
            })
            console.log(err);

        }
}

const storeUsercart=async(req, res,next)=>{
    try{
        const storeUserCart=await UserCart.findById({id:req.params._id})
        res.json({
            status:201,
            message:"Get UserCart",
            storeUserCart:storeUserCart 
        })
    }catch(err){
        console.log(err);
        res.json({
            status:400,
            message:"UserCart not get",
            error:err 
        })
    }

  }

const update_userCart=async(req,res)=>{
    try{
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
            message:"update UserCart Details"
        })

    }catch(err){
        res.json({
            status:400,
            message:"UserCart not update",
            error:err 
        })
        console.log(err);
    }
    
}
const Delete_userCart=async(req,res)=>{
    try{
        const id=req.params.id
        const result=await UserCart.findByIdAndDelete(id)
        res.json({
            status:201,
            message:"deleted UserCart",
        })

    }catch(err){
        res.json({
            status:400,
            message:"UserCart not delete",
            error:err 
        })
        console.log(err);
    }
}

module.exports={createUserCart,update_userCart,Delete_userCart,storeUsercart}