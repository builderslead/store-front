const {queries}=require("../model/customerQueries")
const catchAsyncError=require("../errorhandler/chatchasyncerror")


exports.createContactQuery=catchAsyncError(async(req,res)=>{
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
        
})
