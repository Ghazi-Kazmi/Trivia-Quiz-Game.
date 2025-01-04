// server.js or index.js node back-end/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const questionsRouter = require("./routes/questions");
const aboutsRouter = require("./routes/aboutUs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/quiz")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/questions", questionsRouter);
app.use("/api/about", aboutsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
