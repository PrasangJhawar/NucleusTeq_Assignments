const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const startButton = document.getElementById('start-btn');
const startScreen = document.getElementsByClassName('startScreen')[0];
const playground = document.getElementById('playground');
const loadingScreen = document.getElementById('loading-screen');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const questionNumberElement = document.getElementById('question-number');

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 15;

async function startQuiz(){
    const selectedCategory = categorySelect.value;
    const selectedDifficulty = difficultySelect.value;

    loadingScreen.style.display = "flex";
    startScreen.style.display = "none";

    const quizAPI = `https://opentdb.com/api.php?amount=20&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`;

    const response = await fetch(quizAPI);
    if(!response.ok){
        alert("Failed to fetch quiz data. Please try again.");
        loadingScreen.style.display = "none";
        return;
    }

    const data = await response.json();
    if(data.response_code !== 0 || !data.results || data.results.length === 0){
        alert("No quiz data available. Please try again.");
        loadingScreen.style.display = "none";
        return;
    }

    quizData = data.results;
    loadingScreen.style.display = "none";
    playground.style.display = "block";

    displayQuestion();
}

function decodeHTML(html){
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function displayQuestion(){
    const currentQuestion = quizData[currentQuestionIndex];
    questionNumberElement.textContent = (currentQuestionIndex + 1) + '.'; 
    questionElement.textContent = decodeHTML(currentQuestion.question);

    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    shuffleArray(answers);

    answerButtons.forEach((btn, index) => {
        btn.textContent = decodeHTML(answers[index]);
        btn.disabled = false;
        btn.style.backgroundColor = ""; 
    });

    startTimer();
}

function startTimer(){
    timeRemaining = 15;
    timerElement.textContent = `Time: ${timeRemaining}`;

    timer = setInterval(()=>{
        timeRemaining--;
        timerElement.textContent = `Time: ${timeRemaining}`;
        if(timeRemaining <= 0){
            clearInterval(timer);
            disableButtons();
            showCorrectAnswer();
        }
    }, 1000);
}

function disableButtons(){
    answerButtons.forEach(button => button.disabled = true);
}

function handleAnswer(selectedButton){
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct_answer;

    if(selectedButton.textContent === correctAnswer){
        score++;
        selectedButton.style.backgroundColor = '#9aeabc';
    }else{
        selectedButton.style.backgroundColor = '#ff9393';
    }
    answerButtons.forEach(button => {
        if(button.textContent === correctAnswer && button !== selectedButton){
            button.style.backgroundColor = '#9aeabc';
        }
    });

    disableButtons();
    clearInterval(timer);
}


function showCorrectAnswer(){
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct_answer;

    answerButtons.forEach(button => {
        if(button.textContent === correctAnswer){
            button.style.backgroundColor = '#9aeabc';
        }
    });
}

function showResults(){
    const finalScoreElement = document.getElementById('final-score');
    finalScoreElement.textContent = score;
    playground.style.display = "none";
    document.getElementById('results').style.display = "block";
}

function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        displayQuestion();
    }else{
        showResults();
    }
}

document.getElementById('restart-btn').addEventListener('click', function(){
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('results').style.display = "none";
    startScreen.style.display = "block";
});

answerButtons.forEach(button => {
    button.addEventListener('click', (event)=>{
        handleAnswer(event.target);
    });
});

nextButton.addEventListener('click', nextQuestion);
startButton.addEventListener('click', startQuiz);

function shuffleArray(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}
