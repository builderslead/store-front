const {organization}=require("../model/organization")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorhandler=require("../errorhandler/errhandler")
const customers=require("../model/customer")
const {ApiFeatures}=require("../search/apiffeatures")


exports.Organization=catchAsyncError(async(req,res,next)=>{
    const id = req.params.id;
    const OrganizationsDetails= await organization.findById(id);
      if(!OrganizationsDetails){
        return next(new errorhandler('Data not found!',404))
        }

          res.status(200).json({
            success:true,
            message:'Get Organizations Successfully!',
            OrganizationsDetails
        }) 
  })

  
exports.organizations=catchAsyncError (async(req,res)=>{
  const Organizations= await organization.find({"data.name":{$regex:req.query.name}});
    if(Organizations){
      return res.json({
            status:200,
            success:true,
            message:'Organizations!',
            "type:organizations":Organizations
        })
          
      }
          res.json({
            status:404,
            success:false,
            message:'data Not Found!'
        })

      })
   



