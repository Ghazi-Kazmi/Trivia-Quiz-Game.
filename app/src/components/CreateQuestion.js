import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const CreateQuestion = () => {
  const navigate = useNavigate()

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/questions", {
        question,
        options,
        correctAnswer,
      });
      navigate("/question");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-5">
      <h1>Create Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Question</label>
          <input
            type="text"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Options (comma separated)</label>
          <input
            type="text"
            className="form-control"
            value={options.join(", ")}
            onChange={(e) => setOptions(e.target.value.split(", "))}
          />
        </div>
        <div className="form-group mt-3">
          <label>Correct Answer</label>
          <input
            type="text"
            className="form-control"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Create Question
        </button>
      </form>
    </div>
  );
};

export default CreateQuestion;
    