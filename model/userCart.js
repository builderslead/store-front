const mongoose = require("mongoose");
// const { collection } = require('./profileSchema')

var usercartschema = mongoose.Schema(
  {
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    version: {
      type: String,
      required: [true, "Version required!"],
      default: "v1",
    },
    data: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: [true, "Status required!"],
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
      default: new Date(),
      required: true,
    },
    created_data: {
      type: Object,
      required: true,
    },
  },
  { collection: "usercart" }
);
const UserCart = mongoose.model("usercart", usercartschema);
module.exports = { UserCart };
