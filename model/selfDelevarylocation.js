const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var SelfDel = mongoose.Schema({
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
} , { collection: 'selfDelLocations' })
const selfdellocation=mongoose.model("selfDelLocations",SelfDel)
module.exports={selfdellocation}