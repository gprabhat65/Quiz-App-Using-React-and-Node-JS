import React, { useState } from 'react';
import '../QuizApp.css';

const questions = [
  {
    question: "What is the capital of Japan?",
    options: [
      { text: "Seoul", points: 0 },
      { text: "Tokyo", points: 1 },
      { text: "Beijing", points: 0 },
      { text: "Bangkok", points: 0 },
    ],
    answer: "Tokyo",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Venus", points: 0 },
      { text: "Mars", points: 1 },
      { text: "Jupiter", points: 0 },
      { text: "Saturn", points: 0 },
    ],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: [
      { text: "Jane Austen", points: 1 },
      { text: "Mark Twain", points: 0 },
      { text: "Charles Dickens", points: 0 },
      { text: "Emily Brontë", points: 0 },
    ],
    answer: "Jane Austen",
  },
  {
    question: "What is the largest mammal?",
    options: [
      { text: "Elephant", points: 0 },
      { text: "Blue Whale", points: 1 },
      { text: "Great White Shark", points: 0 },
      { text: "Giraffe", points: 0 },
    ],
    answer: "Blue Whale",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { text: "Oxygen", points: 1 },
      { text: "Gold", points: 0 },
      { text: "Iron", points: 0 },
      { text: "Silver", points: 0 },
    ],
    answer: "Oxygen",
  },
];

function QuizApp() {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (questionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    const newScore = selectedAnswers.reduce((total, answer, index) => {
      return total + (answer ? answer.points : 0);
    }, 0);
    setScore(newScore);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz Application</h1>
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button className="retry-button" onClick={resetQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div className="questions-container">
          {questions.map((question, index) => (
            <div key={index} className="question-block">
              <h3>{index + 1}. {question.question}</h3>
              <div className="options">
                {question.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    className={`option-button ${selectedAnswers[index] === option ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelection(index, option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="submit-button" onClick={calculateScore} disabled={selectedAnswers.includes(null)}>
            Submit Answers
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
