
const customers=require("../model/customer")
const {ApiFeatures}=require("../search/apiffeatures")

exports.customeraddress= async(req,res)=>{
    // try{
        const apiffeatures=new ApiFeatures(customers.findOne(),req.query).search() 
        const customer=await apiffeatures.query
        if(customer.mobile!==customer.mobile){
            return res.json({
                status:404,
                sueccs:false,
                message:'customer Not Found!'
            })
        }
            res.json({
                status:200,
                sueccs:true,
                message:'customers Address!',
                customers:customer
            })
        }
        
        
        
    // }catch(err){
    //     console.log(err);
        // res.json({
        //     status:404,
        //     sueccs:false,
        //     message:'customer Not Found!'
        // })
    // }
