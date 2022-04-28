const { organization } = require("../model/organization");
const {vendor}=require("../model/vendor")
const catchAsyncError = require("../errorhandler/chatchasyncerror");
const errorHandler = require("../errorhandler/errhandler");
const { organizations } = require("./organization");


  
exports.searchQuery=catchAsyncError (async(req,res)=>{
    const organizations= await organization.find({"data.name":{$regex:req.query.name}});
    const vendorCategories= await vendor.find({"data.name":{$regex:req.query.name}});
    // console.log(Organization.data,"ho");
      if(organizations || vendorCategories){
            return res.json({
                status:200,
                success:true,
                organizations,vendorCategories
            })
                
            }
                res.json({
                status:404, 
                success:false,
                message:'data Not Found!'
            })
    
        })
    