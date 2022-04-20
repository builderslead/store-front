const {collection}=require("../model/category")
const ApiFeatures = require("../search/apiffeatures")


// const categorieslist=async(req,res)=>{
//     try{
//         const org_id=req.params.org_id
//         const categoryList=await collection.findById(org_id)

//             res.json({
//                 status:200,
//                 message:"Get category List",
//                 categoryList:categoryList
//             })
        
//     }catch(err){
//         console.log(err);
//         res.json({
//             status:404,
//             sueccs:false,
//             message:'data Not Found!hu6r'
//         })
//     }
// }


const categorieslist= async(req,res)=>{
    try{
        const org_id=req.params.org_id
        const category=await collection.findOne(org_id)
        // const result=await collection.find()

        res.json({
            status:200,
            sueccs:true,
            message:'Category Details!',
            // categorydetail:result,
            category:category
        })
        
    }catch(err){
        console.log(err);
        res.json({
            status:404,
            sueccs:false,
            message:'category Not Found!'
        })
    }
}



// const categorieslist= async(req,res)=>{
//     try{
// const apifeatures=new ApiFeatures(collection.find(),req.query).search() 
// const category=await apifeatures.query   
//         res.json({
//             status:200,
//             sueccs:true,
//             message:'Category Details!',
//             categoryDeatils:category
//         })
        
//     }catch(err){
//         console.log(err);
//         res.json({
//             status:404,
//             sueccs:false,
//             message:'category Not Found!'
//         })
//     }
// }
module.exports={categorieslist}
