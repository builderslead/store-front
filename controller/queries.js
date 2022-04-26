const {queries}=require("../model/customerQueries")

exports.createContactQuery=async(req,res)=>{
    try{
        const createCart={
            org_id:req.body.org_id,
            version:req.body.version,
            data:req.body.data,
            status:req.body.status,
            metadata:req.body.metadata,
            notes:req.body.notes,
            created_data:req.body.created_data
        }
        const insertdata=await queries.insertMany(createCart)
            res.json({
                status:201,
                message:"New Create customerQueries",
                Data:insertdata 
            })
        }catch(err){
            res.json({
                status:400,
                message:"customerQueries not added",
                error:err 
            })
            console.log(err);

        }
}
