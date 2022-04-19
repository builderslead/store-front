

// const { json } = require("express/lib/response")
const {Profile}=require("../model/profile")

const clientsDetails=async(req,res)=>{
    try{
        const id=req.params.org_id
        const clients=await Profile.findById({id:id})
        // console.log(Profile);
        // const clients=await Profile.find()
        res.json({
            status:200,
            message:"clients Details",
            clients:clients
        })
    }catch(err){
        console.log(err);
        res.json({
            status:401,
            message:"user not exist"
        })
    }
}
module.exports={clientsDetails} 