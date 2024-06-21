import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Jeux du Pendu</h1>
        <p className="text-gray-600 mb-6">
          Bienvenue au jeu du pendu! Les règles sont simples :
          <ul className="list-disc list-inside mt-4">
            <li>Un mot est choisi au hasard et vous devez deviner les lettres qui le composent.</li>
            <li>Vous avez un nombre limité d'erreurs autorisées (9 erreurs).</li>
            <li>Chaque mauvaise lettre augmente votre compteur d'erreurs.</li>
            <li>Si vous dépassez le nombre d'erreurs autorisées, vous perdez la partie.</li>
            <li>Si vous devinez toutes les lettres avant d'atteindre la limite d'erreurs, vous gagnez.</li>
          </ul>
        </p>
        <div className="flex justify-center">
          <Link to="/game">
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Jouer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
