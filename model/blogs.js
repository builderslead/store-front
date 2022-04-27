const mongoose=require('mongoose')
const { required } = require('nodemon/lib/config')
// const { collection } = require('./profileSchema')

var blogSchema = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
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
} , { collection: 'blogs' })
const blogs=mongoose.model("blogs",blogSchema)
module.exports={blogs}