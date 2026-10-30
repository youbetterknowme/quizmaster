let score = 0;
let currentQuestion = 0;
let playerName = "";
let xp = 0;

const questions = [
{
question: "Who is Baseerat's Girlfriend?",
answers: ["Me", "MOMO", "TEJAS", "DOMINATOR's SON"],
correct: "ME"
},
{
question: "What is Baseerat's doing rn?",
answers: ["Studying", "Gooning", "Looking at you", "Busy with his gf"],
correct: "Busy with his gf"
},
{
question: "What does Baseerat Like?",
answers: ["MOMO", "BLACK NIGGERS", "YOU", "GOONING"],
correct: "MOMO"
},
{
question: "How many gf's does baseerat have?",
answers: ["1", "2", "5", "No fixed Number"],
correct: "No fixed Number"
},
{
question: "Who is Chucky aka Tanya's Crush?",
answers: ["Darsh aka BBG (Tanya Calls him)", "Rupak", "MOMO", "She's Bi"],
correct: "Darsh aka BBG (Tanya Calls him)"
}
];

function startQuiz() {

playerName = document.getElementById("playerName").value;

if(playerName === "") {
alert("Please enter your name!");
return;
}

showQuestion();
}

function showQuestion() {

if(currentQuestion >= questions.length) {

let rank = "Beginner";

if(score === 5) {
rank = "Legend 🏆";
}
else if(score >= 4) {
rank = "Master ⭐";
}
else if(score >= 3) {
rank = "Scholar 📚";
}

document.body.innerHTML = `
<div class="container">
<h1>🏆 Quiz Complete!</h1>

<h2>${playerName}</h2>

<h2>Score: ${score}/5</h2>

<h2>XP: ${xp}</h2>

<h1>${rank}</h1>

<button onclick="location.reload()">Play Again</button>
</div>
`;

return;
}

let q = questions[currentQuestion];

document.body.innerHTML = `
<div class="container">

<h2>Question ${currentQuestion + 1}/5</h2>

<h1>${q.question}</h1>

<button onclick="checkAnswer('${q.answers[0]}')">${q.answers[0]}</button><br><br>

<button onclick="checkAnswer('${q.answers[1]}')">${q.answers[1]}</button><br><br>

<button onclick="checkAnswer('${q.answers[2]}')">${q.answers[2]}</button><br><br>

<button onclick="checkAnswer('${q.answers[3]}')">${q.answers[3]}</button>

</div>
`;
}

function checkAnswer(answer) {

if(answer === questions[currentQuestion].correct) {
score++;
xp += 100;
}

currentQuestion++;

showQuestion();
}