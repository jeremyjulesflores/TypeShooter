const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
c.font ='"Pixelify Sans", Sans';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const wordCategories = {
  2: ['at', 'on', 'it', 'go', 'no', 'up', 'us', 'do', 'so', 'if'],
  3: ['dog', 'cat', 'sun', 'big', 'red', 'run', 'hot', 'fox', 'man', 'bat'],
  4: ['blue', 'moon', 'tree', 'fire', 'door', 'wind', 'jump', 'rock', 'rain', 'snow'],
  5: ['apple', 'dance', 'happy', 'beach', 'ocean', 'music', 'green', 'smile', 'pizza', 'lucky'],
  6: ['banana', 'summer', 'purple', 'guitar', 'travel', 'castle', 'wonder', 'friend', 'coffee', 'yellow'],
  7: ['freedom', 'awesome', 'champion', 'mystery', 'diamond', 'journey', 'victory', 'monster', 'blessed', 'fantasy'],
  8: ['tomorrow', 'colorful', 'whisper', 'laughter', 'building', 'triangle', 'daughter', 'friendly', 'squirrel', 'birthday'],
  9: ['happiness', 'beautiful', 'adventure', 'challenge', 'wonderful', 'celebrate', 'together', 'important', 'community', 'sometimes'],
  10: ['imagination', 'creativity', 'butterflies', 'watermelon', 'friendship', 'experience', 'perfection', 'generation', 'throughout', 'contribute']
};

class Word {
  constructor(x, y, text, speed) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.speed = speed;
    this.visible = true;
  }

  draw() {
    if (this.visible) {
      c.fillStyle = 'white'
      c.font = '25px Pixel, Arial'; // Use a monospaced pixel art font, adjust size as needed
      c.fillText(this.text, this.x, this.y);
    }
  }

  update() {
    if (this.visible) {
      this.y += this.speed;
      this.draw();
    }
  }

  hide() {
    this.visible = false;
  }
}

let words;
let score = 0;
let maxWordLength = 2;
let maxSpeed = 0.5;
let wordCount = 3; // Number of words in each wave
let waveCount = 0; // Counter for the waves

function init() {
  words = [];
  setInterval(generateRandomWord, 6000);
}

function generateRandomWord() {
    // Create words during the wave
    for (let i = 0; i <= wordCount + (waveCount/4); i++) {
      console.log(wordCount+(waveCount/4));
      const length = getRandomWordLength();
      const x = Math.random() * (canvas.width - 200) + 100;
      const y = 0;
      const text = getRandomWord(length);
      const speedMultiplier = 1 + Math.floor(score / 5) * 0.05;
      const baseSpeed = getRandomSpeed();
      const speed = Math.min(baseSpeed * speedMultiplier, 4);
      const timeout = Math.random() * 3000;

        setTimeout(() => {
            const word = new Word(x, y, text, speed);
            words.push(word);
        }, timeout);

      // Random timeout between 0 and 3 seconds
    }
    
    waveCount++;
    // Pause for 3 seconds between waves
    setTimeout(() => {
      // Reset the wave count
    }, 10000);
  
}

function getRandomWordLength() {
  return Math.floor(Math.random() * (maxWordLength - 2)) + 2;
}

function getRandomWord(length) {
  const category = wordCategories[length];
  return category[Math.floor(Math.random() * category.length)];
}

function getRandomSpeed() {
  return Math.random() * (maxSpeed - 1) + 1;
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  words.forEach((word, index) => {
    word.update();
  });
}

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    const inputElement = document.querySelector('input');
    const inputWord = inputElement.value.toLowerCase();

    let closestWord = null;
    let closestDistance = Infinity;

    words.forEach((word) => {
      if (word.visible) {
        const distance = Math.abs(word.y - canvas.height);

        if (word.text.toLowerCase() === inputWord && distance < closestDistance) {
          closestWord = word;
          closestDistance = distance;
        }
      }
    });

    if (closestWord !== null) {
      closestWord.hide();
      score += 1;
      updateScoreboard();

      if (score % 5 === 0 && maxWordLength < 10) {
        maxWordLength += 1;
      }

      if (score % 5 === 0 && maxSpeed < 2.5) {
        maxSpeed += 1;
      }
    }

    inputElement.value = '';
    inputElement.focus();
  }
}

function updateScoreboard() {
  const scoreboardElement = document.getElementById('score');
  scoreboardElement.textContent = `${score}`;

  const maxInfoElement = document.getElementById('maxSpeedLength');
  maxInfoElement.textContent = `Max Length: ${maxWordLength}, Max Speed: ${maxSpeed}`;
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

document.addEventListener('keydown', handleEnterKey);
