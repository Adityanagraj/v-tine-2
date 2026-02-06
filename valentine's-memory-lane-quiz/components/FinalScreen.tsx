
import React from 'react';
import { Sparkles as SparkleEffect } from './Sparkles';

interface FinalScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  let message = "";
  if (percentage === 100) {
    message = "Perfect score! Our memories are perfectly in sync. You truly are my other half.";
  } else if (percentage >= 75) {
    message = "Amazing! We're a match made in heaven. You know me so well.";
  } else if (percentage >= 50) {
    message = "Great job! It just means we have a few more perfect memories to make together.";
  } else {
    message = "No matter the score, every single moment with you is my absolute favorite.";
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 animate-fadeIn relative overflow-hidden">
      <SparkleEffect />
      <div className="relative z-10 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-rose-200/50 max-w-2xl w-full">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z0bjJqY2p2a3g0eGZ3aHg2Z2x0b3A3MWx0d2k5eDZmcXl2eWY3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tOZ42Mg6pbTUPHW/giphy.gif" 
          alt="Celebratory sparkles and hearts"
          className="w-32 h-32 mx-auto mb-4 rounded-full"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-rose-800 font-serif">
          Our Story Recap
        </h1>
        <p className="text-2xl md:text-3xl text-rose-600 mt-4">
          You scored {score} out of {totalQuestions}!
        </p>
        <p className="text-lg md:text-xl text-rose-700 my-6">
          {message}
        </p>
        <div className="border-t-2 border-rose-200 my-6"></div>
        <p className="text-xl font-serif text-rose-800">
          Thank you for being my greatest adventure. Every day with you is my favorite memory.
        </p>
        <h2 className="text-2xl font-serif text-rose-800 mt-2">Happy Valentine's Day, my love!</h2>
        <button
          onClick={onRestart}
          className="mt-8 bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-rose-500/50 hover:bg-rose-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-rose-300"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
