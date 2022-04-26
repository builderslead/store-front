const {organization}=require("../model/product")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
const errorhandler=require("../errorhandler/errhandler")


// exports.Organization=catchAsyncError(async(req,res,next)=>{
//       const id = req.query.id;

// const OrganizationsDetails= await organization.findById(id);
//   if(!OrganizationsDetails){
//     return next(new errorhandler('Data not found!',404))
//     }

//       res.status(200).json({
//         success:true,
//         message:'Get Organizations Successfully!',
//         OrganizationsDetails
//     })
            
 
//   })


module.exports.Organization = async (req, res) => {
  try {
    var id = req.params.id;       
    // var good_id = new ObjectId(id);
    const organizationDetails = await organization.find(id);
      res.json({
        status: 200,
        message: "Get organizationDetails List",
        organizationDetails:organizationDetails,
      });
  } catch (err) {
    res.json({
      status: 404,
      success: false,
      message: "data Not Found!",
    });
    console.log(err);

  }
};

