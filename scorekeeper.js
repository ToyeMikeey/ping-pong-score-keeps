const player1 = document.querySelector('#p1b');
const player2 = document.querySelector('#p2b');
const player1Dis = document.querySelector('#p1s');
const player2Dis = document.querySelector('#p2s');
const numGame = document.querySelector('#winningScore');
const newGame = document.querySelector('#resetScore');

let p1score = 0;
let p2score = 0;
let gameWon = false;
let winScore = numGame.value

const resetGame = () => {
    p1score = 0;
    p2score = 0;
    player1Dis.textContent = p1score;
    player2Dis.textContent = p2score;
    player2.style.color = ''
    player1.style.color = ''
    player2Dis.style.color = ''
    player1Dis.style.color = ''
}
for (let i = 3; i < 22; i++) {
    const optns = document.createElement('option');
    optns.text = i;
    optns.value = i;
    numGame.appendChild(optns);
}
numGame.addEventListener("change", () => {
    winScore = parseInt(numGame.value);
    resetGame();
});


player1.addEventListener('click', () => {
    if (!gameWon) {
        p1score++;
        player1Dis.textContent = p1score;
        if (p1score === winScore) {
            gameWon = true;
            player1.style.color = 'green'
            player2.style.color = 'red'
            player1Dis.style.color = 'green'
            player2Dis.style.color = 'red'
        }
    }

})
player2.addEventListener('click', () => {
    if (!gameWon) {
        p2score++;
        player2Dis.textContent = p2score;
        if (p2score === winScore) {
            gameWon = true;
            player2.style.color = 'green'
            player1.style.color = 'red'
            player2Dis.style.color = 'green'
            player1Dis.style.color = 'red'
        }
    }

})

newGame.addEventListener('click', resetGame);
