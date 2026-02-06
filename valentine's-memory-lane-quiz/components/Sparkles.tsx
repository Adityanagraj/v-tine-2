
import React from 'react';
import { SparkleIcon } from './icons/SparkleIcon';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const Sparkles: React.FC = () => {
  const sparkles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    style: {
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`,
      animation: `twinkle ${random(3000, 6000)}ms linear infinite`,
      animationDelay: `${random(0, 3000)}ms`,
    },
  }));

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {sparkles.map(sparkle => (
        <SparkleIcon
          key={sparkle.id}
          className="absolute w-4 h-4 text-rose-300"
          style={sparkle.style}
        />
      ))}
    </div>
  );
};
