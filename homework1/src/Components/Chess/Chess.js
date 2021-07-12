import React from 'react';
import './Chess.css';

const Chess = () => {
   const line = [];
   const arrOfLines = [];

   const White = () => {
      return <div className="white chessboard"></div>;
   };

   const Black = () => {
      return <div className="black chessboard"></div>;
   };

   const generate = () => {
      for (let i = 0; i < 4; i++) {
         line.push(Black());
         for (let j = 0; j < 1; j++) {
            line.push(White());
         }
      }
   };

   const start = () => {
      generate();
      for (let i = 1; i < 4; i++) {
         line.reverse();
         arrOfLines.push(...line);
         for (let j = 0; j < 1; j++) {
            line.reverse();
            arrOfLines.push(...line);
         }
      }
   };
   start();
   return <div className="wrapper">{arrOfLines.map((color) => color)}</div>;
};

export default Chess;
