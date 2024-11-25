// import React from 'react';
// import Flag from 'react-world-flags';

// type QuestionProps = {
//   country: { country: string; capital: string; flag: string };
//   options: string[];
//   isCorrect: boolean | null;
//   handleAnswer: (selectedCapital: string) => void;
// };

// const Questions: React.FC<QuestionProps> = ({
//   country,
//   options,
//   isCorrect,
//   handleAnswer,
// }) => {
//   return (
//     <div>
//       {isCorrect !== null && (
//         <div
//           className={`text-center mb-4 font-bold ${
//             isCorrect ? 'text-green-500' : 'text-red-500'
//           }`}
//         >
//           {isCorrect ? 'Correct!' : 'Wrong!'}
//         </div>
//       )}

//       <div className="text-center mb-6">
//         <Flag
//           code={country.flag}
//           alt={country.country}
//           className="w-24 h-16 mx-auto"
//         />
//         <h1 className="text-2xl font-bold mt-4">{country.country}</h1>
//       </div>

//       <div className="space-y-2">
//         {options.map((option) => (
//           <button
//             key={option}
//             onClick={() => handleAnswer(option)}
//             className="w-full py-2 px-4 {} bg-blue-500 text-white rounded hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-600 transition"
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Questions;

import React from 'react';
import Flag from 'react-world-flags';

type QuestionProps = {
  country: { country: string; capital: string; flag: string };
  options: string[];
  isCorrect: boolean | null;
  selectedAnswer: string | null;
  handleAnswer: (selectedCapital: string) => void;
};

const Questions: React.FC<QuestionProps> = ({
  country,
  options,
  selectedAnswer,
  handleAnswer,
}) => {
  return (
    <div>
      {/* {isCorrect !== null && (
        <div
          className={`text-right mb-2 font-medium ${
            isCorrect ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isCorrect ? 'Correct!' : 'Wrong!'}
        </div>
      )} */}

      <div className=" flex flex-col items-center text-center mb-6">
        <Flag
          code={country.flag}
          alt={country.country}
          className="w-34 bg-cover border-2 shadow-2xl border-gray-700 dark:border-gray-200 h-20 mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4">{country.country}</h1>
      </div>

      <div className="space-y-2">
        {options.map((option) => {
          let buttonClass =
            'bg-blue-500 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-600';
          if (selectedAnswer) {
            if (option === country.capital) {
              buttonClass = 'bg-green-500';
            } else if (option === selectedAnswer) {
              buttonClass = 'bg-red-500';
            } else {
              buttonClass = 'bg-gray-500';
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`w-full py-2 px-4 text-white rounded transition ${buttonClass}`}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;