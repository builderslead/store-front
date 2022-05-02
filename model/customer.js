const mongoose = require("mongoose");

const customerschema = mongoose.Schema(
  {
    user: {
      mobile: {
        type: String,
        required: true,
      },
    },
    version: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    data: {
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
    notes: {
      type: Object,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
    created_data: {
      type: Object,
    },
  },
  { collection: "customerAddresses" }
);

const customers = mongoose.model("customerAddresses", customerschema);
module.exports = customers;
