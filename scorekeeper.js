// refactoring method 

const player1 = {
    score: 0,
    set: 0,
    button: document.querySelector('#p1b'),
    display: document.querySelector('#p1s'),
    sets: document.querySelector('#p1set')
};

const player2 = {
    score: 0,
    set: 0,
    button: document.querySelector('#p2b'),
    display: document.querySelector('#p2s'),
    sets: document.querySelector('#p2set')
};

const numGame = document.querySelector('#winningScore');
const newGame = document.querySelector('#resetScore');
const setGame = document.querySelector('#setsplay');

let gameWon = false;
let matchWon = false;
let originalWinScore = numGame.value;
let winScore = originalWinScore;
let setWin = setGame.value;


for (let i = 3; i < 22; i++) {
    const optns = document.createElement('option');
    optns.text = i;
    optns.value = i;
    numGame.appendChild(optns);
}
for (let i = 1; i < 22; i++) {
    const opton = document.createElement('option');
    opton.text = i;
    opton.value = i;
    setGame.appendChild(opton);
}
numGame.addEventListener("change", () => {
    winScore = parseInt(numGame.value);
    originalWinScore = winScore;
    resetGame();
});
setGame.addEventListener("change", () => {
    totalSets = parseInt(setGame.value);
    resetMatch();
});


const updateScore = (player, opponent) => {
    if (!gameWon && !matchWon) {
        player.score++;
        player.display.textContent = player.score;

        if (player.score === winScore) {
            gameWon = true;
            player.display.style.color = 'green'
            opponent.display.style.color = 'red'
            player.button.style.color = 'green'
            opponent.button.style.color = 'red'
            updateSet(player, opponent)
        }
        if (player.score === winScore - 1 && opponent.score === winScore - 1) {
            winScore++
        }
    }
}
const updateSet = (player, opponent) => {
    if (gameWon) {
        player.set++;
        player.sets.textContent = player.set;
        gameWon = false;
        resetGame()
        if (player.set === Math.ceil(totalSets / 2)) {
            matchWon = true;
            player.sets.style.color = 'green'
            opponent.sets.style.color = 'red'
            player.button.style.color = 'green'
            opponent.button.style.color = 'red'
        }
    }
}

player1.button.addEventListener('click', () => {
    updateScore(player1, player2)
})
player2.button.addEventListener('click', () => {
    updateScore(player2, player1)

})
const resetGame = () => {
    player1.score = 0;
    player2.score = 0;
    gameWon = false;
    player1.display.textContent = player1.score;
    player2.display.textContent = player2.score;
    player1.button.style.color = ''
    player2.button.style.color = ''
    player1.display.style.color = ''
    player2.display.style.color = ''
    winScore = originalWinScore;
}
const resetMatch = () => {
    resetGame();
    player1.set = 0;
    player2.set = 0;
    matchWon = false;
    player1.sets.textContent = player1.set;
    player2.sets.textContent = player2.set;
    player1.sets.style.color = '';
    player2.sets.style.color = '';
};
newGame.addEventListener('click', resetMatch);


// initial method

// const player1 = document.querySelector('#p1b');
// const player2 = document.querySelector('#p2b');
// const player1Dis = document.querySelector('#p1s');
// const player2Dis = document.querySelector('#p2s');
// const numGame = document.querySelector('#winningScore');
// const newGame = document.querySelector('#resetScore');

// let p1score = 0;
// let p2score = 0;
// let gameWon = false;
// let winScore = numGame.value

// const resetGame = () => {
//     p1score = 0;
//     p2score = 0;
//     gameWon = false;
//     player1Dis.textContent = p1score;
//     player2Dis.textContent = p2score;
//     player2.style.color = ''
//     player1.style.color = ''
//     player2Dis.style.color = ''
//     player1Dis.style.color = ''
// }
// for (let i = 3; i < 22; i++) {
//     const optns = document.createElement('option');
//     optns.text = i;
//     optns.value = i;
//     numGame.appendChild(optns);
// }
// numGame.addEventListener("change", () => {
//     winScore = parseInt(numGame.value);
//     resetGame();
// });


// player1.addEventListener('click', () => {
//     if (!gameWon) {
//         p1score++;
//         player1Dis.textContent = p1score;
//         if (p1score === winScore) {
//             gameWon = true;
//             player1.style.color = 'green'
//             player2.style.color = 'red'
//             player1Dis.style.color = 'green'
//             player2Dis.style.color = 'red'
//         }
//     }

// })
// player2.addEventListener('click', () => {
//     if (!gameWon) {
//         p2score++;
//         player2Dis.textContent = p2score;
//         if (p2score === winScore) {
//             gameWon = true;
//             player2.style.color = 'green'
//             player1.style.color = 'red'
//             player2Dis.style.color = 'green'
//             player1Dis.style.color = 'red'
//         }
//     }

// })

// newGame.addEventListener('click', resetGame);
