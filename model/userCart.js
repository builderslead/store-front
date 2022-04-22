const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var usercartschema = mongoose.Schema({
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
        default:Date.now
    },
    created_data:{
        type:Object
    }
} , { collection: 'usercart' })
const UserCart=mongoose.model("usercart",usercartschema)
module.exports={UserCart}