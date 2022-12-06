const Mongoose = require("mongoose")
const pincodeSchema = new Mongoose.Schema({
  cityname: {
    type: String,
    // unique:true,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
})
const m = Mongoose.model("pincodes", pincodeSchema);
module.exports = m;