import React from 'react';

function Result({ score, totalQuestions, onRetry }) {
  return (
    <div className="result">
      <h2>Quiz Complete!</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <button onClick={onRetry}>Retry Quiz</button>
    </div>
  );
}

export default Result;
