const {Promo}=require("../model/promocode")
const ApiFeatures=require("../search/apiffeatures")
const catchAsyncError=require("../errorhandler/chatchasyncerror")
// const promocodeArray=async(req,res)=>{
//     try{
//         // const apiffeatures=new ApiFeatures(Promo.findOne(),req.query).search() 
//         // const promo=await apiffeatures.query
//         const org_id=req.params.org_id
//         const promo=await Promo.find({org_id:org_id})

//         res.json({
//             status:200,
//             message:" promocode array",
//             Promo:promo
//         })
           
//      }catch(err){
//         return res.json({
//             status:401,
//             message:"promo not found"
//                 })
//     }
// }

exports.promocodeArray=catchAsyncError(async(req, res)=>{
    const org_id=req.params.org_id
    const categories=await Promo.find({org_id:org_id})
    if(!categories){
      //   return next(new ErrorHandler('Category Data not found!',404))
       return res.send({
            statusCode:404,
            success:false,
            message:'promo Data Not Found!'
        })
    }

    res.status(200).json({
      success:true,
      message:'Get promo Successfully!',
      categories
  })
      
 
  })
// module.exports={promocodeArray}