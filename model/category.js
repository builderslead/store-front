const mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      // ref:'products',
      required: true,
    },
    uid: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    notes: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    metadata: {
      type: Object,
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
  },
  { collection: "collections" }
);
const collection = mongoose.model("collections", userSchema);
module.exports = { collection };
