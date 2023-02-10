import Piece from '../Board/Components/Pieces.js';

function pieceConvert(string, setActivePiece, setGames, games ) {
  switch(string){
    case "rp":
      return {color: "red", type: "pawn", img: <Piece type={"red pawn"} src={"./pieces/red_pawn.png"} alt={"red pawn"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "rp" }
    case "gp":
      return {color: "green", type: "pawn", img: <Piece type={"green pawn"} src={"./pieces/green_pawn.png"} alt={"green pawn"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "gp" }
    case "bp":
      return {color: "blue", type: "pawn", img: <Piece type={"blue pawn"} src={"./pieces/blue_pawn.png"} alt={"blue pawn"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "bp" }
    case "yp":
      return {color: "yellow", type: "pawn", img: <Piece type={"yellow pawn"} src={"./pieces/yellow_pawn.png"} alt={"yellow pawn"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "yp",highlight: "highlight--none"}
    case "rr":
      return {color: "red", type: "rook", img: <Piece type={"red rook"} src={"./pieces/red_rook.png"} alt={"red rook"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "rr" }
    case "gr":
      return {color: "green", type: "rook", img: <Piece type={"green rook"} src={"./pieces/green_rook.png"} alt={"green rook"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "gr" }
    case "br":
      return {color: "blue", type: "rook", img: <Piece type={"blue rook"} src={"./pieces/blue_rook.png"} alt={"blue rook"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "br" }
    case "yr":
      return {color: "yellow", type: "rook", img: <Piece type={"yellow rook"} src={"./pieces/yellow_rook.png"} alt={"yellow rook"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "yr" }
    case "rn":
      return {color: "red", type: "knight", img: <Piece type={"red knight"} src={"./pieces/red_knight.png"} alt={"red knight"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "rn" }
    case "gn":
      return {color: "green", type: "knight", img: <Piece type={"green knight"} src={"./pieces/green_knight.png"} alt={"green knight"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "gn" }
    case "bn":
      return {color: "blue", type: "knight", img: <Piece type={"blue knight"} src={"./pieces/blue_knight.png"} alt={"blue knight"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "bn" }
    case "yn":
      return {color: "yellow", type: "knight", img: <Piece type={"yellow knight"} src={"./pieces/yellow_knight.png"} alt={"yellow knight"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "yn" }
    case "rb":
      return {color: "red", type: "bishop", img: <Piece type={"red bishop"} src={"./pieces/red_bishop.png"} alt={"red bishop"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "rb" }
    case "gb":
      return {color: "green", type: "bishop", img: <Piece type={"green bishop"} src={"./pieces/green_bishop.png"} alt={"green bishop"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "gb" }
    case "bb":
      return {color: "blue", type: "bishop", img: <Piece type={"blue bishop"} src={"./pieces/blue_bishop.png"} alt={"blue bishop"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "bb" }
    case "yb":
      return {color: "yellow", type: "bishop", img: <Piece type={"yellow bishop"} src={"./pieces/yellow_bishop.png"} alt={"yellow bishop"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "yb" }
    case "rq":
      return {color: "red", type: "queen", img: <Piece type={"red queen"} src={"./pieces/red_queen.png"} alt={"red queen"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "rq" }
    case "gq":
      return {color: "green", type: "queen", img: <Piece type={"green queen"} src={"./pieces/green_queen.png"} alt={"green queen"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "gq" }
    case "bq":
      return {color: "blue", type: "queen", img: <Piece type={"blue queen"} src={"./pieces/blue_queen.png"} alt={"blue queen"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "bq" }
    case "yq":
      return {color: "yellow", type: "queen", img: <Piece type={"yellow queen"} src={"./pieces/yellow_queen.png"} alt={"yellow queen"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "yq" }
    case "rk":
      return {color: "red", type: "king", img: <Piece type={"red king"} src={"./pieces/red_king.png"} alt={"red king"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "rk" }
    case "gk":
      return {color: "green", type: "king", img: <Piece type={"green king"} src={"./pieces/green_king.png"} alt={"green king"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "gk" }
    case "bk":
      return {color: "blue", type: "king", img: <Piece type={"blue king"} src={"./pieces/blue_king.png"} alt={"blue king"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "bk" }
    case "yk":
      return {color: "yellow", type: "king", img: <Piece type={"yellow king"} src={"./pieces/yellow_king.png"} alt={"yellow king"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "yk" }
    default:
      return {color: "empty", type: "empty", img: <Piece type={"empty"} setActivePiece={setActivePiece} setGames={setGames} games={games}/>, acro: "em"};
  }
};

export function convert(boardObj, setActivePiece, setGames, games) {
  const convertedBoard = [];
  Object.keys(boardObj).forEach((key) => {
    if (key.includes('loc')) {
      const numLoc = key.substring(3);
      const spaceObj = {loc: parseInt(numLoc), contents: {...pieceConvert(boardObj[key].substring(0,2), setActivePiece, setGames, games), highlight: boardObj[key].substring(3)}};
      convertedBoard.push(spaceObj);
    }
  });
  return convertedBoard;
};

export function unconvert(board) {
  const unconvertedBoard = {};
  const spaceObjs = board.filter((obj) => Object.keys(obj).includes('loc'));
  const nonSpaceObjs = board.filter((obj) => !Object.keys(obj).includes('loc'));
  spaceObjs.forEach((obj) => {
    const key = `loc${obj["loc"]}`;
    const contents = obj["contents"];
    const newValue = `${contents["acro"]}_${contents["highlight"]}`;
    unconvertedBoard[key] = newValue;
  });
  nonSpaceObjs.forEach((obj) => {
    const key = Object.keys(obj)[0];
    const contents = obj[Object.keys(obj)[0]];
    unconvertedBoard[key] = contents;
  })
  return unconvertedBoard;
};