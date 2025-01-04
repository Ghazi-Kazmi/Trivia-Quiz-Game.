import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("http://localhost:5000/api/questions");
      setQuestions(res.data);
    };

    fetchQuestions();
  }, []);

  const deleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/questions/${id}`);
      setQuestions(questions.filter((question) => question._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{padding: "40px"}}>
      <h1>Questions</h1>
      <Link to="/create" className="btn btn-primary mb-3">
        Create Question
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Options</th>
            <th>Correct Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question._id}>
              <td>{question.question}</td>
              <td>{question.options.join(", ")}</td>
              <td>{question.correctAnswer}</td>
              <td style={{display: "flex", gap: "5px"}}>
                <Link
                  to={`/update/${question._id}`}
                  className="btn btn-warning mr-2"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteQuestion(question._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList;
