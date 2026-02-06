
import React, { useState } from 'react';

interface GameSetupProps {
  onStartGame: (keywords: string) => void;
  error: string | null;
}

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame, error }) => {
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keywords.trim()) {
      onStartGame(keywords);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-rose-200/50 max-w-lg w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-800 font-serif mb-4">Tell Me Our Story</h2>
        <p className="text-rose-600 mb-6">
          Enter a few of your favorite memories, inside jokes, or special moments. The more detail, the more magical the quiz!
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., Our first date at the Italian restaurant, our trip to the beach, the time we adopted our puppy, our favorite movie night..."
            className="w-full h-40 p-4 border-2 border-rose-200 rounded-lg focus:ring-rose-400 focus:border-rose-400 transition-colors duration-300 text-rose-800 placeholder-rose-400 bg-rose-50/50"
          />
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={!keywords.trim()}
            className="mt-6 w-full bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-rose-500/50 hover:bg-rose-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-rose-300 disabled:bg-rose-300 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
          >
            Create Our Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default GameSetup;
