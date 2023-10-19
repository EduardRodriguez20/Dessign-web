let winningCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 5, 9]];

let playerMoves = [];
let computerMoves = [];
let availableBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function selectBox(selectedBox) {
    let index = parseInt(selectedBox.getAttribute('data-index'));
    if (!availableBoxes.includes(index + 1)) {
        return;
    }

    selectedBox.innerHTML = '<ion-icon class="icons" name="close"></ion-icon>';
    playerMoves.push(index + 1);
    let indexToRemove = availableBoxes.indexOf(index + 1);
    if (indexToRemove > -1) {
        availableBoxes.splice(indexToRemove, 1);
    }

    if (checkWinner(playerMoves)) {
        alert("¡Ganaste!");
        disableBoxes();
        return;
    }

    if (availableBoxes.length === 0) {
        alert("¡Empate!");
        disableBoxes();
        return;
    }

    setTimeout(function () {
        let index = playComputer();
        let boxes = document.querySelectorAll(".contain_game div");
        boxes[index].innerHTML = '<ion-icon class="icons" name="ellipse-outline"></ion-icon>';
    
        if (checkWinner(computerMoves)) {
          alert("¡Gana la computadora!");
          disableBoxes();
          return;
        }
      }, 1000);
}

function playComputer() {
    let play = 0;
    let stopPlay = stopPlayPlayer();
    let moveWinPC = movementWinPC();

    if (moveWinPC !== 0) {
        play = moveWinPC;
    } else if (stopPlay !== 0) {
        play = stopPlay;
    } else {
        play = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
    }

    computerMoves.push(play);
    let indexToRemove = availableBoxes.indexOf(play);
    if (indexToRemove > -1) {
        availableBoxes.splice(indexToRemove, 1);
    }
    return play - 1;
}

function movementWinPC() {
    let possibleMove = 0;
    for (let i = 0; i < winningCombination.length; i++) {
      let intersection = winningCombination[i].filter((x) => !computerMoves.includes(x));
      if (intersection.length === 1 && availableBoxes.includes(intersection[0])) {
        possibleMove = intersection[0];
        break;
      }
    }
    return possibleMove;
  }

function checkWinner(moves) {
    for (let i = 0; i < winningCombination.length; i++) {
        if (moves.includes(winningCombination[i][0]) && moves.includes(winningCombination[i][1]) && moves.includes(winningCombination[i][2])) {
            return true;
        }
    }
    return false;
}

function stopPlayPlayer() {
    let possibleMove = 0;
    for (let i = 0; i < winningCombination.length; i++) {
      let intersection = winningCombination[i].filter((x) => !playerMoves.includes(x));
      if (intersection.length === 1 && availableBoxes.includes(intersection[0])) {
        possibleMove = intersection[0];
        break;
      }
    }
    return possibleMove;
  }
  
  function disableBoxes() {
    let boxes = document.querySelectorAll(".contain_game div");
    boxes.forEach((box) => {
      box.style.pointerEvents = "none";
    });
  }
  

function resetGame() {
    let boxes = document.querySelectorAll(".contain_game div");
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.pointerEvents = "auto";
    });
    playerMoves = [];
    computerMoves = [];
    availableBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById("playerScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";
}
