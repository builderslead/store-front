const mongoose=require('mongoose');
const validator=require('validator')
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://bizlexjoe:bizJopAnPoi991@bizlexis-aritt.mongodb.net/bxstorev1?retryWrites=true'
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connection Successfully..');
}).catch((err)=>{
    console.log(err);
})

var products = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.String,
        ref:"collections",
        required:true
    },
    version:{
        type:String,
        required:true
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
    metadata:{
        type:Object,
        required:true
    },
    order:{
        type:Number,
        required:true,
        default:1
    },
    status:{
        type:String,
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
})
const Products=mongoose.model("product",products)


// const mongoose=require('mongoose');

var userSchema = mongoose.Schema({
    client:{
        type:String,
        required:true
    },

    client_id:{
        type:Number,
        required:true
    },
    profiles:{
        type:Array,
        required:true
    },
    version:{
        type:String,
        required:true
    },
    data:{
        type:Object,
        required:true
    },
    payment_modes:{
        type:Array,
        required:true
    },
    payment_keys:{
        type:Object,
        required:true
    },
    shop_settings:{
    type:Object,
    required:true
    },
    status:{
        type:String,
        required:true  
    },
    notes:{
        type:Object,
        required:true
    },
    metadata:{
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
},{collection:"organization"})

const organization=mongoose.model("organization",userSchema)


module.exports=Products,organization
