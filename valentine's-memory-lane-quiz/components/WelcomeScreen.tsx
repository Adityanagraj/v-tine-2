
import React from 'react';
import { HeartIcon } from './icons/HeartIcon';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 animate-fadeIn">
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-rose-200/50 max-w-2xl w-full">
        <HeartIcon className="w-16 h-16 text-rose-400 mx-auto mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 font-serif">
          Our Memory Lane
        </h1>
        <p className="text-lg md:text-xl text-rose-600 mt-4 mb-8">
          A little Valentine's journey just for you. Let's see how well you remember our story!
        </p>
        <button
          onClick={onStart}
          className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-rose-500/50 hover:bg-rose-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-rose-300"
        >
          Begin Our Adventure
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
