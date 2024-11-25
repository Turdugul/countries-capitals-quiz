import React from 'react';

type ResultProps = {
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
  handleRestart: () => void;
};

const Result: React.FC<ResultProps> = ({
  correctAnswers,
  wrongAnswers,
  totalQuestions,
  handleRestart,
}) => {
  return (
    <div className="container  mt-4 space-x-2">
      {correctAnswers || wrongAnswers ? (
        <div className="flex px-4 gap-1 items-center">
          <div className="flex-1">
            <p className="mb-2">
              Correct:{' '}
              <span className="text-green-500">
                {' '}
                {correctAnswers} / {totalQuestions}{' '}
              </span>
            </p>
            <p className="mb-2">
              Wrong:{' '}
              <span className="text-red-500">
                {wrongAnswers} / {totalQuestions}{' '}
              </span>
            </p>
          </div>
          <button
            onClick={handleRestart}
            className="  py-2 px-4 m-4 xs:p-0 bg-green-500 rounded-xl text-white hover:bg-green-700 dark:bg-green-400 dark:hover:bg-gren-500 transition"
          >
            Restart
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Result;
