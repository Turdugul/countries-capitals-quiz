import React, { useEffect, useReducer, useState } from 'react';
import Questions from './components/Questions';
import Result from './components/Result';
import ThemeToggle from './components/ThemeToggle';
import { countries } from './data/countries';

type State = {
  currentCountryIndex: number;
  correctAnswers: number;
  wrongAnswers: number;
  isCorrect: boolean | null;
};

type Action =
  | { type: 'NEXT_COUNTRY' }
  | { type: 'ANSWER'; isCorrect: boolean }
  | { type: 'RESET' };

const initialState: State = {
  currentCountryIndex: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  isCorrect: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'NEXT_COUNTRY':
      return {
        ...state,
        currentCountryIndex: (state.currentCountryIndex + 1) % countries.length,
        isCorrect: null,
      };
    case 'ANSWER':
      return {
        ...state,
        isCorrect: action.isCorrect,
        correctAnswers: action.isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
        wrongAnswers: !action.isCorrect
          ? state.wrongAnswers + 1
          : state.wrongAnswers,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentCountry = countries[state.currentCountryIndex];

  useEffect(() => {
    const generateOptions = () => {
      const capitals = countries.map((c) => c.capital);
      const choices = [currentCountry.capital];
      while (choices.length < 4) {
        const randomCapital =
          capitals[Math.floor(Math.random() * capitals.length)];
        if (!choices.includes(randomCapital)) choices.push(randomCapital);
      }
      setOptions(choices.sort(() => Math.random() - 0.5));
    };
    generateOptions();
    setSelectedAnswer(null);
  }, [state.currentCountryIndex, currentCountry.capital]);

  const handleAnswer = (selectedCapital: string) => {
    setSelectedAnswer(selectedCapital);
    const isCorrect = selectedCapital === currentCountry.capital;
    dispatch({ type: 'ANSWER', isCorrect });
    setTimeout(() => dispatch({ type: 'NEXT_COUNTRY' }), 1000);
  };

  const handleRestart = () => dispatch({ type: 'RESET' });

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center p-6">
      <div className="max-w-lg h-2/4 sm:h-2/4 w-full bg-white dark:bg-gray-700 rounded-lg shadow-2xl p-6 m-4">
        <div className="flex justify-between items-center mb-4 flex-col-reverse sm:flex-row">
          <h1 className="flex-1 text-base sm:text-2xl text-center font-bold">
            Countries and Capitals Quiz
          </h1>
          <ThemeToggle />
        </div>

        <Questions
          country={currentCountry}
          selectedAnswer={selectedAnswer}
          options={options}
          isCorrect={state.isCorrect}
          handleAnswer={handleAnswer}
        />

        <Result
          correctAnswers={state.correctAnswers}
          wrongAnswers={state.wrongAnswers}
          handleRestart={handleRestart}
          totalQuestions={countries.length}
        />
      </div>
    </div>
  );
};

export default App;
