let animationFrame;
let wordInterval;
function startGame() {
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
        
        gravitate() {
            const dx = planet.x - this.x;
            const dy = planet.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
        
        
            
            const gravityX = (dx / distance)
            const gravityY = (dy / distance) 
        
            
        
            this.x += gravityX * this.speed;
            this.y += gravityY * this.speed;
            
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
            // this.y += this.speed;
            this.draw();
            }
        }
        
        hide() {
            this.visible = false;
        }
        }
    

    
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Hide the menu and display the game canvas
    document.getElementById('menu').style.display = 'none';
    document.getElementById('canvasContainer').style.display = 'block';
    document.getElementById('scoreboard').style.display = 'block';
    document.getElementById('maxInfo').style.display = 'block';
    document.getElementById('textField').style.display = 'block';

    
    
    const planet = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 50,
      color: 'Grey'
    };
    
    function drawPlanet() {
      c.beginPath();
      c.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
      c.fillStyle = planet.color;
      c.fill();
      c.closePath();
    }
    
    let words;
    let score = 0;
    let maxWordLength = 2;
    let maxSpeed = 0.5;
    let wordCount = 3; // Number of words in each wave
    let waveCount = 0; // Counter for the waves
    
    function init() {
      words = [];
      wordInterval = setInterval(generateRandomWord, 6000);
    }
    
    function generateRandomWord() {
      // Create words during the wave
      for (let i = 0; i <= wordCount + (waveCount/4); i++) {
        const length = getRandomWordLength();
        let x,y;
        const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = 0;
          break;
        case 1: // Right
          x = canvas.width;
          y = Math.random() * canvas.height;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height;
          break;
        case 3: // Left
          x = 0;
          y = Math.random() * canvas.height;
          break;
      }

      const text = getRandomWord(length);
      const speedMultiplier = 1 + Math.floor(score / 5) * 0.05;
      const baseSpeed = getRandomSpeed();
      const speed = Math.min(baseSpeed * speedMultiplier, 4);


      const timeout = Math.random() * 3000;

      setTimeout(() => {
          const word = new Word(x, y, text, speed);
          words.push(word);
      }, timeout);
      
    }
      waveCount++;
      console.log(words);

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
        drawPlanet();
        words.forEach((word, index) => {
        word.update();
        word.gravitate();
    
        // Check for collision with the planet
        const distanceToPlanet = Math.sqrt(
          Math.pow(word.x - planet.x, 2) + Math.pow(word.y - planet.y, 2)
        );
        
        //If Word touches the planet 
        if (distanceToPlanet < planet.radius && word.visible) {
            score = 0;
            maxWordLength = 2;
            maxSpeed = 0.5;
            wordCount = 3;
            waveCount = 0;
            words = [];
            // Stop the animation loop
            
            gameOver();

        }
      });
    }
    
    function handleEnterKey(event) {
      if (event.key === 'Enter') {
        const inputElement = document.querySelector('input');
        const inputWord = inputElement.value.toLowerCase();
        console.log("entered");
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

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    function gameOver() {
        cancelAnimationFrame(animationFrame);
        clearInterval(wordInterval);

        // Reset game variables and return to the menu
        document.getElementById('menu').style.display = 'block';
        document.getElementById('canvasContainer').style.display = 'none';
        document.getElementById('scoreboard').style.display = 'none';
        document.getElementById('maxInfo').style.display = 'none';
        document.getElementById('textField').style.display = 'none';
                
        console.log(`game over ${words}`);
        
      
        // Return to the menu
        document.getElementById('menu').style.display = 'block';
      }
    
    document.addEventListener('keydown', handleEnterKey);

    
    init();
    animationFrame = requestAnimationFrame(animate);

    }


export {startGame}