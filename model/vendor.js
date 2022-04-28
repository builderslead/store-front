const mongoose=require('mongoose')

var vendorSchema = mongoose.Schema({
    version:{
        type:String,
        required:[true,'Version required!']
    },
    data:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        required:[true,'Status required!']
    },
    
    metadata:{
        type:Object,
        required:true
    },
    notes:{
        type:Object,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    },
    created_data:{
        type:Object,
        required:true
    },
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        // ref:"organization"
    }


} , { collection: 'vendorCategories' })
const vendor=mongoose.model("vendorCategories",vendorSchema)
module.exports={vendor}