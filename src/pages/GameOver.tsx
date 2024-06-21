import React from 'react';
import { useParams } from 'react-router-dom';

export default function GameOver() {
  const { result } = useParams<{ result: string }>();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4">Game Over</h1>
        <p className="text-2xl text-gray-300">Vous avez : <span className="font-semibold text-white">{result}</span></p>
      </div>
    </div>
  );
}
