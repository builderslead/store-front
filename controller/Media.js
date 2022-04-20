const {media}=require("../model/mediaschema")
const ApiFeatures=require("../search/apiffeatures")


const Storemedia=async(req,res)=>{
    try{
        const apiffeatures=new ApiFeatures(media.findOne(),req.query).search() 
        const mediastore=await apiffeatures.query
        // const org_id=req.params.org_id
        // const mediastore=await media.find({org_id:org_id})
            res.json({
                status:200,
                message:" promocode array",
                mediastore:mediastore
            })
    }catch(err){
         console.log(err)
        res.json({
        status:401,
        message:"promo not found"    
    })
    }

}
module.exports={Storemedia}