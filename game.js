const heart = document.getElementById('heart');
const scoreDisplay = document.getElementById('score');
let score = 0;

function randomPosition() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
}

heart.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  heart.classList.add('pop');
  setTimeout(() => heart.classList.remove('pop'), 200);
  randomPosition();
});

setInterval(randomPosition, 1200);

randomPosition();
