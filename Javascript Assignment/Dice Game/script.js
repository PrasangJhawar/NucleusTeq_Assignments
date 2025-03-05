function updateNames(){
    const player1 = document.getElementById("player-1");
    const player2 = document.getElementById("player-2");
    const player1_name = document.getElementById("name1");
    const player2_name = document.getElementById("name2");

    if(player1.value.trim() === "" || player2.value.trim() === "" || player1.value === "Player1"){
        alert("Please enter both names");
        return;
    }

    if(gameStarted){
        alert("You cannot change the names midway");
        return;
    }

    player1_name.textContent = player1.value;
    player2_name.textContent = player2.value;

    document.getElementById("roll").disabled = false;
    document.getElementById("save").disabled = false;
    document.getElementById("reset").disabled = false;
    gameStarted = true;
    updateActivePlayer();
}



//initializations
let gameStarted = false;
let savedScore_player1 = 0;
let savedScore_player2 = 0;
let current_score_player1 = 0;
let current_score_player2 = 0;
let currentPlayer = 1;



//all function definitions
function generateNumber(){
    return Math.floor(Math.random()*6) + 1;
}


function updateScores(){
    document.getElementById("player1_current_score").textContent = current_score_player1;
    document.getElementById("player2_current_score").textContent = current_score_player2;
    document.getElementById("player1_saved_score").textContent = savedScore_player1;
    document.getElementById("player2_saved_score").textContent = savedScore_player2;
}

function updateDiceImage(roll){
    const diceImage = document.getElementById("dice-image");
    diceImage.src = `images/dice${roll}.png`;
}

function rollDice(){
    let roll = generateNumber();
    updateDiceImage(roll);

    if(roll === 1){
        if(currentPlayer === 1){
            current_score_player1 = 0;
        }else{
            current_score_player2 = 0;
        }
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        updateScores();
        updateActivePlayer();
        return;
    }

    if(currentPlayer === 1){
        current_score_player1 += roll;
        updateScores();
    }else{
        current_score_player2 += roll;
        updateScores();
    }
}

function saveScore(){
    if(currentPlayer === 1){
        savedScore_player1 += current_score_player1;
        current_score_player1 = 0;
    }else{
        savedScore_player2 += current_score_player2;
        current_score_player2 = 0;
    }

    document.getElementById("player1_saved_score").textContent = savedScore_player1;
    document.getElementById("player2_saved_score").textContent = savedScore_player2;

    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    updateActivePlayer();
    checkWinner();
    updateScores();
}

function checkWinner(){
    if(savedScore_player1 >= 100){
        alert("Player 1 wins!");
        resetGame();
    }else if(savedScore_player2 >= 100){
        alert("Player 2 wins!");
        resetGame();
    }
}

function updateActivePlayer(){
    const player1info = document.getElementById("player1-info");
    const player2info = document.getElementById("player2-info");

    if(currentPlayer == 1){
        player1info.classList.add("active-player");
        player2info.classList.remove("active-player");
    }else{
        player2info.classList.add("active-player");
        player1info.classList.remove("active-player");
    }
}

function resetGame(){
    savedScore_player1 = 0;
    savedScore_player2 = 0;
    current_score_player1 = 0;
    current_score_player2 = 0;
    currentPlayer = 1;
    updateScores();
    document.getElementById("roll").disabled = true;
    document.getElementById("save").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("name1").textContent = "Player1";
    document.getElementById("name2").textContent = "Player2";

    const player1Info = document.getElementById("player1-info");
    const player2Info = document.getElementById("player2-info");
    player1Info.classList.remove("active-player");
    player2Info.classList.remove("active-player");
    // player1Info.style.backgroundColor = "";
    // player2Info.style.backgroundColor = "";

    gameStarted = false;
}


//main game buttons
document.getElementById("start-game").addEventListener('click', updateNames);

document.getElementById("roll").addEventListener('click', rollDice);

document.getElementById("save").addEventListener('click', saveScore);

document.getElementById("reset").addEventListener('click', resetGame);


window.onload = function() {
    document.getElementById("reset").click(); 
};