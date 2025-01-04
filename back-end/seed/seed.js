
const mongoose = require("mongoose");
const Question = require("../models/Question");
const { initialQuestions } = require("./data");
// const Question = require("./models/Question");

const mongoURI = "mongodb://localhost:27017/quiz";


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected...");
    return Question.deleteMany({});
  })
  .then(() => {
    return Question.insertMany(initialQuestions);
  })
  .then(() => {
    console.log("Initial questions inserted");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error:", err);
  });
