import React from 'react';

function Question({ questionData, questionNumber, selectedAnswer, onAnswer }) {
  return (
    <div className="question">
      <h3>
        Question {questionNumber}: {questionData.question}
      </h3>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={selectedAnswer === option ? 'selected' : ''}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
