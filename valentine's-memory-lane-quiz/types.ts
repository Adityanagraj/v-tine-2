
export type GameState = 'welcome' | 'playing' | 'finished';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}
