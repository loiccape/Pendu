import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Clavier from "../components/Clavier";

const Game = () => {
  const navigate = useNavigate();
  const [motADeviner, setMotADeviner] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [erreur, setErreur] = useState<number>(0);
  const [winNumber, setWinNumber] = useState<number>(0);

  const wordList = useMemo(() => [
    "toilette", "bougie", "faucon", "ordinateur", "javascript", "react",
    "pendu", "developpement", "programmeur", "algorithme", "logiciel",
    "matériel", "souris", "clavier", "écran"
  ], []);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * wordList.length);
    const wordFind = wordList[randomNumber];
    setMotADeviner(wordFind.split(''));
    setWinNumber(new Set(wordFind).size - 1);
  }, [wordList]);

  const handleKeyClick = (key: string) => {
    if (guessedLetters.includes(key)) {
      alert("Lettre déjà utilisée");
    } else if (!motADeviner.includes(key)) {
      handleError();
      setGuessedLetters([...guessedLetters, key]);
    } else {
      handleLetterFound();
      setGuessedLetters([...guessedLetters, key]);
    }
  };

  const handleError = () => {
    setErreur(erreur + 1);
    if (erreur === 8) {
      navigate("/game-over/Perdu");
    }
  };

  const handleLetterFound = () => {
    setWinNumber(winNumber - 1);
    if (winNumber === 0) {
      navigate("/game-over/Gagné");
    }
  };

  const renderWord = () => {
    return motADeviner.map((letter, index) => (
      guessedLetters.includes(letter) ? <span key={index} className="inline-block mx-1">{letter}</span> : <span key={index} className="inline-block mx-1">_</span>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Jeu du Pendu</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <p className="text-2xl mb-4">Mot à deviner : <span className="font-mono">{renderWord()}</span></p>
        <Clavier onKeyClick={handleKeyClick} />
        <p className="text-xl mt-4">Lettres utilisées : <span className="font-mono">{guessedLetters.join(', ')}</span></p>
        <p className="text-xl mt-2">Erreurs : <span className="font-mono">{erreur}</span></p>
      </div>
    </div>
  );
};

export default Game;
