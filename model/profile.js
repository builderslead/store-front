const mongoose = require("mongoose");

const profile = mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
    },
    client_id: {
      type: String,
      required: [true, "Client_id required"],
    },
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "organization",
    },
    version: {
      type: String,
      required: [true, "Version required"],
    },
    data: {
      type: Object,
      required:true
    },
    notes: {
      type: Object,
      required:true
    },
    metadata: {
      type: Object,
      required:true
    },
    role: {
      type: String,
      default: "user",
    },
    status: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      required:true
    },
    created_data: {
      type: Object,
      required:true
    },
  },
  { collection: "profile" }
);

const Profile = mongoose.model("profile", profile);

module.exports = { Profile };
