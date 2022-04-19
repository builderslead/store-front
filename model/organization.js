
// const mongoose=require('mongoose');

// var userSchema = mongoose.Schema({
//     client:{
//         type:String,
//         required:true
//     },

//     client_id:{
//         type:Number,
//         required:true
//     },
//     profiles:{
//         type:Array,
//         required:true
//     },
//     version:{
//         type:String,
//         required:true
//     },
//     data:{
//         type:Object,
//         required:true
//     },
//     payment_modes:{
//         type:Array,
//         required:true
//     },
//     payment_keys:{
//         type:Object,
//         required:true
//     },
//     shop_settings:{
//     type:Object,
//     required:true
//     },
//     status:{
//         type:String,
//         required:true  
//     },
//     notes:{
//         type:Object,
//         required:true
//     },
//     metadata:{
//         type:Object,
//         required:true
//     },
//     created_at:{
//         type:Date,
//         required:true
//     },
//     created_data:{
//         type:Object,
//         required:true
//     }
// },{collection:"organization"})

// const organization=mongoose.model("organization",userSchema)

// module.exports=organization