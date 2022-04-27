const mongoose = require("mongoose");
const validator = require("validator");
const MONGO_URL =
  process.env.MONGO_URL ||"mongodb+srv://bizlexjoe:bizJopAnPoi991@bizlexis-aritt.mongodb.net/bxstorev1?retryWrites=true";
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connection Successfully..");
  })
  .catch((err) => {
    console.log(err);
  });

var products = mongoose.Schema({
  org_id: {
    type: mongoose.Schema.Types.String,
    // ref:"collections",
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  uid: {
    type: Number,
    required: true,
  },
  data: 
    {
      type:Object,
      required:true
      // tags: 
      //   {
      //     bestseller: {
      //       type: Boolean,
      //       required: true,
      //     },
      //     featured: {
      //       type: Boolean,
      //       required: true,
      //     },
      //     new_arrival: {
      //       type: Boolean,
      //       required: true,
      //     },
      //   },

    },
  notes: {
    type: Object,
    required: true,
  },
  metadata: {
    type: Object,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    default: 1,
  },
  status: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    required: true,
  },
  created_data: {
    type: Object,
    required: true,
  },
},{collection:"products"});
const Products = mongoose.model("products",products);
module.exports={Products}


