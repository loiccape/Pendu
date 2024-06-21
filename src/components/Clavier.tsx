import React from 'react';

interface ClavierProps {
  onKeyClick: (key: string) => void;
}

const Clavier: React.FC<ClavierProps> = ({ onKeyClick }) => {
  const clavier = [
    "a", "z", "e", "r", "t", "y", "u", "i", "o", "p",
    "q", "s", "d", "f", "g", "h", "j", "k", "l", "m",
    "w", "x", "c", "v", "b", "n"
  ];

  const handleClick = (key: string) => {
    onKeyClick(key); 
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {clavier.map((e, index) => (
        <p key={index} className='button text-2xl rounded bg-blue-500 w-9' onClick={() => handleClick(e)}>{e}</p>
      ))}
    </div>
  );
}

export default Clavier;
