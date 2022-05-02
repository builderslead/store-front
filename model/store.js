const mongoose = require("mongoose");
// const { collection } = require('./profileSchema')

var storeschema = mongoose.Schema(
  {
    org_id: {
      type: mongoose.Schema.Types.String,
    },
    version: {
      type: String,
      required: [true, "Version required!"],
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
      required: true,
    },
    created_data: {
      type: Object,
      required: true,
    },
  },
  { collection: "stores" }
);
const store = mongoose.model("stores", storeschema);
module.exports = { store };
