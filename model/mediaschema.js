const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var mediaschema = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.String,
    },
    version:{
        type:String,
        required:[true,'Version required!']
    },
    data:{
        type:Object
    },
    status:{
        type:String,
        required:[true,'Status required!']
    },
    
    metadata:{
        type:Object
    },
    notes:{
        type:Object
    },
    created_at:{
        type:Date,
    },
    created_data:{
        type:Object
    }
} , { collection: 'media' })
const media=mongoose.model("media",mediaschema)
module.exports={media}