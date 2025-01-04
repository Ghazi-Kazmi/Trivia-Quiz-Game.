import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(`http://localhost:5000/api/questions/${id}`);
      setQuestion(res.data.question);
      setOptions(res.data.options);
      setCorrectAnswer(res.data.correctAnswer);
    };
    fetchQuestion();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/questions/${id}`, {
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
      <h1 className="mb-3">Update Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Question</label>
          <input
            type="text"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Options (comma separated)</label>
          <input
            type="text"
            className="form-control"
            value={options.join(", ")}
            onChange={(e) => setOptions(e.target.value.split(", "))}
          />
        </div>
        <div className="form-group mb-3">
          <label>Correct Answer</label>
          <input
            type="text"
            className="form-control"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Question
        </button>
      </form>
    </div>
  );
};

export default UpdateQuestion;
