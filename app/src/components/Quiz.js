import React, { useState, useEffect } from "react";
import axios from "axios"

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/questions");
        setQuestions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the quiz data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        totalScore += 20; // Assuming each question is worth 20 points
      }
    });
    setScore(totalScore);
    setOver(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (over) {
    return (
      <div className="result-page">
        <div className="result-inner">
          <h2>Knowledge Check</h2>
          <div className="result">
            <div>Your Score: {score}%</div>
            <div>{score} Points</div>
          </div>
          <div className="result">
            <div>Passing Score: 80%</div>
            <div>80 Points</div>
          </div>
          <div className="result-message">
            {score >= 80
              ? "You Passed! Congratulations!"
              : "You did not Pass. Better Luck Next Time!"}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="quiz">
      <div className="step-number">
        <div className="step-number-inner">
          Q <span id="activeStep">{currentStep + 1}</span>/
          {questions.length}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="tab-100 order-c col-md-5 p-relative">
            <div className="side-img">
              <img src="assets/images/side.png" alt="side-img" />
            </div>
            <div className="step-bar">
              {questions.map((_, index) => (
                <div className="bar" key={index}>
                  <div
                    className={`fill ${index <= currentStep ? "w-100" : ""}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-100 col-md-7">
            <div className="show-section wrapper">
              <section className="steps">
                <form method="post" noValidate>
                  <h2 className="q-heading">{currentQuestion.question}</h2>
                  <div className="form-inner">
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={index}
                        className={`bounce-left radio-field delay-${
                          index * 100
                        }`}
                      >
                        <input
                          className="checkmark"
                          type="radio"
                          name={`op${currentStep}`}
                          value={option}
                          checked={
                            selectedAnswers[currentQuestion.id] === option
                          }
                          onChange={() =>
                            handleAnswerSelect(currentQuestion.id, option)
                          }
                        />
                        <label>{option}</label>
                      </div>
                    ))}
                  </div>
                  <div className="next-prev">
                    {currentStep > 0 && (
                      <button
                        type="button"
                        className="prev"
                        onClick={handlePrevious}
                      >
                        <i className="fa-solid fa-arrow-left"></i> last question
                      </button>
                    )}
                    {currentStep < questions.length - 1 && (
                      <button
                        type="button"
                        className="next"
                        onClick={handleNext}
                      >
                        next question{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    )}
                    {currentStep === questions.length - 1 && (
                      <button
                        type="button"
                        className="apply"
                        onClick={handleSubmit}
                      >
                        Submit <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    )}
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
