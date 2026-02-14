import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './App.css';
import song from './media/sound/WishList.mp3';

const App = () => {
  const [yesSize, setYesSize] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);
  const audioRef = useRef(null);

  const handleNoClick = () => {
    setYesSize(yesSize + 0.5);
  };

  const handleYesClick = () => {
    setIsAccepted(true);
    confetti();
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="container">
      <audio ref={audioRef} src={song} />

      {!isAccepted ? (
        <div className="content">
          <motion.img 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHBlanhnNGE2b2Iwb3ZnOXAxM2IxMDVtaTNxaXg0NXFrbWVsNzZwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t8xgPfC5oNIRMrNooe/giphy.gif" 
            alt="Main-GIF" 
          />
          <h1>¿Quieres ser mi San Valentín? ❤️</h1>
          <div className="buttons">
            <button 
              className="btn-yes" 
              style={{ transform: `scale(${yesSize})` }}
              onClick={handleYesClick}
            >
              ¡SÍ!
            </button>
            <button className="btn-no" onClick={handleNoClick}>
              No...
            </button>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="content"
        >
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3V3eHRpOGU2MnNuZXcxNWVnb2R1bmUxdjZxaGFrZzNnNmQ2bTAyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MdpRgsK513zVwrvaRr/giphy.gif" alt="YES-GIF" />
          <h1>¡¡TE AMO MI VIDA!!, ERES EL MEJOR REGALO QUE LA VIDA ME HA DADO🌹❤️</h1>
        </motion.div>
      )}
    </div>
  );
};

export default App;