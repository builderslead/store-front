const {collection}=require("../model/category")
const ApiFeatures = require("../search/apiffeatures")

const catchAsyncError=require("../errorhandler/chatchasyncerror")
const categorieslist=catchAsyncError(async(req,res)=>{
        const categorieslist=await collection.find({org_id:req.query.org_id})
        if(!categorieslist){
            // return next(new errorhandler('promo Data not found!',404))
            return res.send({
                statusCode:404,
                success:false,
                message:'Category not found  Not Found!'
            })
        }

                res.status(200).json({
                    success:true,
                    message:'Get Category Successfully!',
                    categorieslist:categorieslist
                })
                    

        })


module.exports={categorieslist}
