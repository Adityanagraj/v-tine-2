
import React, { useState, useEffect } from 'react';
import { HeartIcon } from './icons/HeartIcon';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswered: (isCorrect: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, options, correctAnswer, onAnswered }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(option);
    onAnswered(option === correctAnswer);
  };
  
  // Flip the card automatically when a new question appears.
  useEffect(() => {
    setIsFlipped(false); // Reset flip state for new questions
    const timer = setTimeout(() => setIsFlipped(true), 100);
    return () => clearTimeout(timer);
  }, [question]);
  
  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return 'bg-white hover:bg-rose-100 text-rose-700';
    }
    if (option === correctAnswer) {
      return 'bg-green-500 text-white animate-pulse';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    }
    return 'bg-gray-200 text-gray-500 cursor-not-allowed';
  };

  return (
    <div className={`relative w-full h-96 transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
      {/* Card Back */}
      <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center bg-rose-300 rounded-2xl shadow-lg">
        <HeartIcon className="w-24 h-24 text-white/50" />
      </div>
      
      {/* Card Front */}
      <div className="absolute w-full h-full p-6 md:p-8 bg-white rounded-2xl shadow-2xl shadow-rose-200/50 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
        <h3 className="text-xl md:text-3xl font-bold text-rose-800 mb-6 flex items-center justify-center">
          {question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={!!selectedAnswer}
              className={`w-full p-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
