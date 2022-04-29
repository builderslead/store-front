const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var bannersSchema = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.String
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
    notes:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        required:[true,'Status required!']
    },
    created_at:{
        type:Date,
        required:true
    },
    created_data:{
        type:Object,
        required:true
    }
} , { collection: 'banners' })
const banner=mongoose.model("banners",bannersSchema)
module.exports={banner}