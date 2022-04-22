const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var suppliersschema = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    version:{
        type:String,
        required:[true,'Version required!']
    },
    uid:{
        type:Number,
        required:true
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
} , { collection: 'suppliers' })
const supplier=mongoose.model("suppliers",suppliersschema)
module.exports={supplier}