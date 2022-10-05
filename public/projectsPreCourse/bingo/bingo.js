let bingoBoard = [];
let hasWon = false;
let hasLine = false;
let isPlaying = true;
let numbersCrossed = [];

const userName = () => {
  let playerName;
  do {
    playerName = prompt("Introduce your player name: ");
    if (typeof playerName === "string") {
      playerName = playerName.trim();
    }
  } while (typeof playerName != "string" || playerName === "");
  console.log(`Welcome ${playerName}`);
};

const generateBoard = () => {
  let usedNumbers = [];
  bingoBoard = [];
  for (let i = 0; i < 15; i++) {
    do {
      bingoBoard[i] = { number: generateRandomNumber(), matched: false };
    } while (usedNumbers.includes(bingoBoard[i].number));
    usedNumbers.push(bingoBoard[i].number);
  }
  console.log("Here is your board");
  console.log(`
    1st line   ${bingoBoard[0].number}  ${bingoBoard[1].number}  ${bingoBoard[2].number}  ${bingoBoard[3].number}  ${bingoBoard[4].number}
    2nd line   ${bingoBoard[5].number}  ${bingoBoard[6].number}  ${bingoBoard[7].number}  ${bingoBoard[8].number}  ${bingoBoard[9].number}
    3rd line   ${bingoBoard[10].number}  ${bingoBoard[11].number}  ${bingoBoard[12].number}  ${bingoBoard[13].number}  ${bingoBoard[14].number}`);
  if (!confirm("Do you like this board?")) {
    console.log("Hope you like this new board");
    generateBoard();
  }
};

const generateRandomNumber = () => {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 50 + 1);
  return randomNumber;
};

const numberToCross = () => {
  let newNumberToCross = 0;
  do {
    newNumberToCross = generateRandomNumber();
  } while (numbersCrossed.includes(newNumberToCross));
  numbersCrossed.push(newNumberToCross);
  return newNumberToCross;
};

const checkIfHasLine = () => {
  let testingLine = 0;
  for (i = 0; i < 5; i++) {
    if (bingoBoard[i].matched) {
      testingLine++;
    }
    if (testingLine === 5) {
      hasLine = true;
      return true;
    }
  }
  testingLine = 0;
  for (i = 5; i < 10; i++) {
    if (bingoBoard[i].matched) {
      testingLine++;
    }
    if (testingLine === 5) {
      hasLine = true;
      return true;
    }
  }
  testingLine = 0;
  for (i = 10; i < 15; i++) {
    if (bingoBoard[i].matched) {
      testingLine++;
    }
    if (testingLine === 5) {
      hasLine = true;
      return true;
    }
  }
};

const newTurn = () => {
  let turns = 0;
  do {
    turns++;
    let numberToCrossNow = numberToCross();
    alert("Number: " + numberToCrossNow);
    for (let i = 0; i < bingoBoard.length; i++) {
      if (numberToCrossNow === bingoBoard[i].number) {
        console.log(
          "We found the number " + numberToCrossNow + " on your board"
        );
        bingoBoard[i].number = "X";
        bingoBoard[i].matched = true;
        if (!hasLine) {
          if (checkIfHasLine()) {
            alert("You got a Line!");
          }
        }
      }
    }
    console.log(`
        1st line   ${bingoBoard[0].number}  ${bingoBoard[1].number}  ${bingoBoard[2].number}  ${bingoBoard[3].number}  ${bingoBoard[4].number}
        2nd line   ${bingoBoard[5].number}  ${bingoBoard[6].number}  ${bingoBoard[7].number}  ${bingoBoard[8].number}  ${bingoBoard[9].number}
        3rd line   ${bingoBoard[10].number}  ${bingoBoard[11].number}  ${bingoBoard[12].number}  ${bingoBoard[13].number}  ${bingoBoard[14].number}`);
    let checkIfWin = 0;
    for (i = 0; i < bingoBoard.length; i++) {
      if (bingoBoard[i].matched) {
        checkIfWin++;
      }
      if (checkIfWin === bingoBoard.length) {
        hasWon = true;
        alert("YOU WON IN " + turns + " TURNS CONGRATULATIONS!!!");
        alert("YOUR SCORE IS " + (50 - turns) + "/35");
      }
    }
    if (!hasWon) {
      if (confirm("Do you want another number?")) {
        isPlaying = true;
      } else {
        isPlaying = false;
        alert("Ending the current game, thanks for playing!");
      }
    }
  } while (!hasWon && isPlaying);
};

userName();
do {
  hasWon = false;
  hasLine = false;
  numbersCrossed = [];
  generateBoard();
  newTurn();
  if (confirm("Do you want to play again?")) {
    isPlaying = true;
  } else {
    isPlaying = false;
    alert("Enjoy your day, bye!");
  }
} while (isPlaying);
