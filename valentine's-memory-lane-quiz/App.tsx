
import React, { useState } from 'react';
import type { GameState, QuizQuestion } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import FinalScreen from './components/FinalScreen';
import { staticQuestions } from './data/questions';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setQuestions(staticQuestions);
    setScore(0);
    setGameState('playing');
  };

  const handleGameFinish = (finalScore: number) => {
    setScore(finalScore);
    setGameState('finished');
  };

  const handleRestart = () => {
    setQuestions([]);
    setScore(0);
    setGameState('welcome');
  };

  const renderGameState = () => {
    switch (gameState) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStartGame} />;
      case 'playing':
        return <GameBoard questions={questions} onGameEnd={handleGameFinish} />;
      case 'finished':
        return <FinalScreen score={score} totalQuestions={questions.length} onRestart={handleRestart} />;
      default:
        return <WelcomeScreen onStart={handleStartGame} />;
    }
  };

  return (
    <main className="bg-rose-50 min-h-screen text-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-50"></div>
      <div className="relative z-10">
        {renderGameState()}
      </div>
    </main>
  );
};

export default App;
