import React from 'react';

type FinalProps = {
  correctAnswers: number;
  totalQuestions: number;
};

const Final: React.FC<FinalProps> = ({ correctAnswers, totalQuestions }) => {
  const isPerfectScore = correctAnswers === totalQuestions;

  return (
    <div className="container p-4 text-center">
      <h1 className="text-2xl font-bold text-green-600">Congratulations! 🎉</h1>
      <p className="text-lg mt-2">
        You correctly answered{' '}
        <span className="font-bold">{correctAnswers}</span>{' '}
        {correctAnswers === 1 ? 'question' : 'questions'} out of{' '}
        <span className="font-bold">{totalQuestions}</span>.
      </p>
      {isPerfectScore && (
        <p className="text-green-500 my-3">
          Wow! A perfect score of {totalQuestions} capitals!
        </p>
      )}
    </div>
  );
};

export default Final;
