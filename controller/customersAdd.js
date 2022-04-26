
const customers=require("../model/customer")
const {ApiFeatures}=require("../search/apiffeatures")

exports.customerAddress= async(req,res)=>{
        const apiffeatures=new ApiFeatures(customers.find(),req.query).search() 
        const customer=await apiffeatures.query
        if(!customer){
            return res.json({
                status:404,
                success:false,
                message:'customer Not Found!'
            })
        }
            res.json({
                status:200,
                success:true,
                message:'customers Address!',
                customers:customer
            })
        }
        
        
        
    