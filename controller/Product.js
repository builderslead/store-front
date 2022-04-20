const { collection } = require('../model/collections')
const Products=require('../model/collections')

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


const All_CategoryOfProduct=async(req,res)=>{
    try{
        // const org_id=req.params.org_id.id
        const category_id=req.query.id
        const user=await Products.find(category_id)//.populate("org_id").exec()
        // const user=await Products.find(["name","image","id"]).populate({path:"org_id",select:["name","image","id"]}                                                                                                                                                                                                                                                                                                                                                                                                           ).exec()

            res.send({status:200,
            success:true,
            message:"category of product",
            user:user
    })
    }catch(err){
        res.send(err)
        console.log(err);
    }
}

module.exports={All_CategoryOfProduct,storeProductBYID}

