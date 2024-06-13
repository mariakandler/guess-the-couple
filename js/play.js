import { checkAnswer } from "./checks/checks.js";
import { level1 } from "./levels/levels.js";

document.addEventListener('DOMContentLoaded', () => {
const answerBtn = document.getElementById('answerBtn');
const closeBtn = document.getElementById('closeBtn');
const submit = document.getElementById('submit');
const youWon = document.getElementById('youWon')

closeBtn.addEventListener('click', () => {
    const responserDiv = document.getElementById('responserDiv');
    responserDiv.style.display = 'none';
})

answerBtn.addEventListener('click', () => {
    const responserDiv = document.getElementById('responserDiv');
    responserDiv.style.display = 'flex';
    responserDiv.style.flexDirection = 'column';
    responserDiv.style.alignItems = 'center';
})

level1()
submit.addEventListener('click', checkAnswer)
})

youWon.addEventListener('click', () => {
    window.location.href = '/html/index.html'
})

