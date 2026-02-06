
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';
import QuizCard from './QuizCard';

interface GameBoardProps {
  questions: QuizQuestion[];
  onGameEnd: (finalScore: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ questions, onGameEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        onGameEnd(score + (isCorrect ? 1 : 0));
      }
    }, 1500); // Wait for feedback animation before moving on
  };
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-rose-800 font-serif">Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <div className="w-full bg-rose-200 rounded-full h-2.5 mt-2">
            <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
        
        <div className="[perspective:1000px]">
            <QuizCard
                key={currentQuestionIndex}
                question={currentQuestion.question}
                options={currentQuestion.options}
                correctAnswer={currentQuestion.correctAnswer}
                onAnswered={handleNextQuestion}
            />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
