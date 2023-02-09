import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from '../../Game.js';
import Piece from './Pieces.js';

export default function Space({ color, id }) { 

  const board = useContext(BoardContext);
  const occupant = findContents(parseInt(id));
  
  function findContents(locNum) {
    const obj = board.find(({loc}) => loc === locNum);
    return obj.contents;
  };

  return (
    <div
      className={`space ${color} ${occupant.type} ${occupant.acro} ${occupant.highlight}`}
      id={id}
    >
      {occupant.img}
    </div>
  );
};