const mongoose=require('mongoose')

var wishlistSchema = mongoose.Schema({
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
        default:new Date,
        required:true
    },
    created_data:{
        type:Object,
        required:true
    }
} , { collection: 'customerWishlist' })
const wishlist=mongoose.model("customerWishlist",wishlistSchema)
module.exports={wishlist} 