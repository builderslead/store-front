const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var vendorSchema = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.ObjectId
    },
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
    }
} , { collection: 'vendorCategories' })
const vendor=mongoose.model("vendorCategories",vendorSchema)
module.exports={vendor}