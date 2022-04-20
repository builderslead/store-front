const mongoose=require('mongoose')
// const { collection } = require('./profileSchema')

var promos = mongoose.Schema({
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
} , { collection: 'promoCodes' })
const Promo=mongoose.model("promoCodes",promos)
module.exports={Promo}