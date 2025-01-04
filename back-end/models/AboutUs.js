const mongoose = require("mongoose");

// const mongoose = new mongoose.Schema({
//   name:String;
//   age:String
// })

const AboutUsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AboutUs", AboutUsSchema);
