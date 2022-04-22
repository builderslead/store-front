const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var productOptionsschema = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    version:{
        type:String,
        required:[true,'Version required!'],
        default:"v1"
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
        default:Date.now
    },
    created_data:{
        type:Object,
        required:true
    }
} , { collection: 'productOptions' })
const productOption=mongoose.model("productOptions",productOptionsschema)
module.exports={productOption}