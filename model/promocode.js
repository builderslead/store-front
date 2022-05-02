const mongoose = require("mongoose");
// const { collection } = require('./profileSchema')

var promos = mongoose.Schema(
  {
    org_id: {
      type: mongoose.Schema.Types.String,
      required: true,
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
  { collection: "promoCodes" }
);
const Promo = mongoose.model("promoCodes", promos);
module.exports = { Promo };
