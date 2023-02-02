function inBounds(number) {
  if ((number > 11 && number < 16) || (number > 20 && number < 27) || (number > 30 && number < 37) || (number > 40 && number < 47) || (number > 50 && number < 57) || (number > 60 && number < 67)) {
    return true
  } else {
    return false
  }
};

function occupied(space, boardObj) {
  const obj = boardObj.find(({loc}) => loc === space);
  const contents = obj.contents.img.props.className;
  const occ = contents === "empty" ? false : true;
  return occ;
};

function opponent(space, boardObj, color) {
  if (occupied(space, boardObj)) {
    const obj = boardObj.find(({loc}) => loc === space);
    const contents = obj.contents.img.props.className;
    const opp = contents.includes(color) ? false : true;
    return opp;
  }
};

function slide(init, displacement, array, board, altArray, color) {
  let position = init;
  let nextSquare = position + displacement;
  while (inBounds(nextSquare) && !occupied(nextSquare, board)) {
    array.push(nextSquare);
    position = nextSquare;
  }
  if (opponent(nextSquare, board, color)) {
    altArray.push(nextSquare);
  }
};

function step(init, displacement, array, board, altArray, color) {
  let nextSquare = init + displacement;
  if (inBounds(nextSquare) && !occupied(nextSquare, board)) {
    array.push(nextSquare);
  } else if (inBounds(nextSquare) && (opponent(nextSquare, board, color))) {
    altArray.push(nextSquare);
  }
};

function bishopMoves(start, board, color) {
  const piece = [];
  const opponents = [];

  slide(start, -Math.abs(11), piece, board, opponents, color);
  slide(start, -Math.abs(9), piece, board, opponents, color);
  slide(start, 9, piece, board, opponents, color);
  slide(start, 11, piece, board, opponents, color);

  return {moves: piece, opponents: opponents};
};

function rookMoves(start, board, color) {
  const piece = [];
  const opponents = [];

  slide(start, -Math.abs(10), piece, board, opponents, color);
  slide(start, -Math.abs(1), piece, board, opponents, color);
  slide(start, 1, piece, board, opponents, color);
  slide(start, 10, piece, board, opponents, color);

  return {moves: piece, opponents: opponents};
};

function queenMoves(start, board, color) {
  const piece = [];
  const opponents = [];

  slide(start, -Math.abs(11), piece, board, opponents, color);
  slide(start, -Math.abs(9), piece, board, opponents, color);
  slide(start, 9, piece, board, opponents, color);
  slide(start, 11, piece, board, opponents, color);
  slide(start, -Math.abs(10), piece, board, opponents, color);
  slide(start, -Math.abs(1), piece, board, opponents, color);
  slide(start, 1, piece, board, opponents, color);
  slide(start, 10, piece, board, opponents, color);

  return {moves: piece, opponents: opponents};
};

function knightMoves(start, board, color) {
  const piece = [];
  const opponents = [];

  step(start, -Math.abs(31), piece, board, opponents, color);
  step(start, -Math.abs(29), piece, board, opponents, color);
  step(start, -Math.abs(7), piece, board, opponents, color);
  step(start, 31, piece, board, opponents, color);
  step(start, 13, piece, board, opponents, color);
  step(start, -Math.abs(13), piece, board, opponents, color);
  step(start, 7, piece, board, opponents, color);
  step(start, 29, piece, board, opponents, color);

  return {moves: piece, opponents: opponents};
};

function kingMoves(start, board, color) {
  const piece = [];
  const opponents = [];

  step(start, -Math.abs(10), piece, board, opponents, color);
  step(start, -Math.abs(9), piece, board, opponents, color);
  step(start, 1, piece, board, opponents, color);
  step(start, 11, piece, board, opponents, color);
  step(start, 10, piece, board, opponents, color);
  step(start, 9, piece, board, opponents, color);
  step(start, -Math.abs(1), piece, board, opponents, color);
  step(start, -Math.abs(11), piece, board, opponents, color);

  return {moves: piece, opponents: opponents};
};

function pawnMoves(start, board, color) {
  const piece = [];
  const blocking = [];
  const capturing = [];
  let firstMove = "";

  switch(color){
    case "red":
      firstMove = (start === 21 || 31 || 41 || 51? true : false);
      step(start, 1, piece, board, blocking, color);
      if (firstMove) {
        step(start, 2, piece, board, blocking, color);
        if (opponent(start - 8, board, color)) {
          capturing.push((start - 8));
        }
        if (opponent((start + 12), board, color)) {
          capturing.push((start + 12));
        }
      }
      if (opponent(start - 9, board, color)) {
        capturing.push((start - 9));
      }
      if (opponent((start + 11), board, color)) {
        capturing.push((start + 11));
      }
      console.log({piece: piece, blocks: blocking, capture: capturing})
      return {piece: piece, blocks: blocking, capture: capturing}
    case "blue":
      firstMove = (start === 26 || 36 || 46 || 56? true : false);
      step(start, -Math.abs(1), piece, board, blocking, color);
      if (firstMove) {
        step(start, -Math.abs(2), piece, board, blocking, color);
        if (opponent(start - 12, board, color)) {
          capturing.push((start - 12));
        }
        if (opponent((start + 8), board, color)) {
          capturing.push((start + 8));
        }
      }
      if (opponent(start - 11, board, color)) {
        capturing.push(start - 11);
      }
      if (opponent((start + 9), board, color)) {
        capturing.push((start + 9));
      }
      return {piece: piece, blocks: blocking, capture: capturing}
    case "green":
      firstMove = (start === 12 || 13 || 14 || 15? true : false);
      step(start, 10, piece, board, blocking, color);
      if (firstMove) {
        step(start, 20, piece, board, blocking, color);
        if (opponent(start + 19, board, color)) {
          capturing.push((start + 19));
        }
        if (opponent((start + 21), board, color)) {
          capturing.push((start + 21));
        }
      }
      if (opponent((start + 9), board, color)) {
        capturing.push((start + 9));
      }
      if (opponent((start + 11), board, color)) {
        capturing.push((start + 11));
      }
      return {piece: piece, blocks: blocking, capture: capturing}
    case "yellow":
      firstMove = (start === 62 || 63 || 64 || 65? true : false);
      step(start, -Math.abs(10), piece, board, blocking, color);
      if (firstMove) {
        step(start, -Math.abs(20), piece, board, blocking, color);
        if (opponent(start - 19, board, color)) {
          capturing.push((start - 19));
        }
        if (opponent((start - 21), board, color)) {
          capturing.push((start - 21));
        }
      }
      if (opponent(start - 9, board, color)) {
        capturing.push(start - 9);
      }
      if (opponent(start - 11, board, color)) {
        capturing.push(start - 11);
      }
      return {piece: piece, blocks: blocking, capture: capturing}
  };
};

export {knightMoves, bishopMoves, rookMoves, queenMoves, kingMoves, pawnMoves};