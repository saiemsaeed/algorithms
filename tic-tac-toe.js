function isWin(board) {
  //REGEX for win0
  const regex0 = new RegExp(Array(board.length).fill(0).join(''))
  //REGEX for win1
  const regex1 = new RegExp(Array(board.length).fill(1).join(''))
  //Variable to return winning side ROW, COL, DIAGNOL
  let whichWin = "";
  // ROW VALUES
  const rows = board.map((val, index) => val.join('')).join(',')
  // COL VALUES
  const cols = board.map((val, index) => val.map((_, i) => board[i][index]).join('')).join(',')
  // DIAGNOL VALUES
  const diagnol = board.map((val, index) => val[index]).join('');
  // REVERSE DIAGNOL VALUES
  const reverseDiagnol = board.map((val, index) => val.reverse()[index]).join('');
  // CHECK IF WIN IN ROW
  if(regex0.test(rows) || regex1.test(rows))
    whichWin = "ROW";
  // CHECK IF WIN IN COLUMN
  if(regex0.test(cols) || regex1.test(cols))
    whichWin = "COL"
  // CHECK IF WIN IN DIAGNOL OR REVERSE DIAGNOL
  if(regex0.test(diagnol) || regex1.test(diagnol) || regex0.test(reverseDiagnol) || regex1.test(reverseDiagnol))
    whichWin = "DIAGNOL"

  // RETURN WINNING SIDE
  return whichWin;
}

const board1 = [
  [0,0,0,1],
  [0,1,1,0],
  [0,0,1,1],
  [0,1,1,1]
]

console.log(isWin(board1));
