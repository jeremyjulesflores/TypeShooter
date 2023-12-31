/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
c.font = '"Pixelify Sans", Sans';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var wordCategories = {
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
var Word = /*#__PURE__*/function () {
  function Word(x, y, text, speed) {
    _classCallCheck(this, Word);
    this.x = x;
    this.y = y;
    this.text = text;
    this.speed = speed;
    this.visible = true;
  }
  _createClass(Word, [{
    key: "draw",
    value: function draw() {
      if (this.visible) {
        c.fillStyle = 'white';
        c.font = '25px Pixel, Arial'; // Use a monospaced pixel art font, adjust size as needed
        c.fillText(this.text, this.x, this.y);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.visible) {
        this.y += this.speed;
        this.draw();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.visible = false;
    }
  }]);
  return Word;
}();
var words;
var score = 0;
var maxWordLength = 2;
var maxSpeed = 0.5;
var wordCount = 3; // Number of words in each wave
var waveCount = 0; // Counter for the waves

function init() {
  words = [];
  setInterval(generateRandomWord, 6000);
}
function generateRandomWord() {
  var _loop = function _loop() {
    console.log(wordCount + waveCount / 4);
    var length = getRandomWordLength();
    var x = Math.random() * (canvas.width - 200) + 100;
    var y = 0;
    var text = getRandomWord(length);
    var speedMultiplier = 1 + Math.floor(score / 5) * 0.05;
    var baseSpeed = getRandomSpeed();
    var speed = Math.min(baseSpeed * speedMultiplier, 4);
    var timeout = Math.random() * 3000;
    setTimeout(function () {
      var word = new Word(x, y, text, speed);
      words.push(word);
    }, timeout);

    // Random timeout between 0 and 3 seconds
  };
  // Create words during the wave
  for (var i = 0; i <= wordCount + waveCount / 4; i++) {
    _loop();
  }
  waveCount++;
  // Pause for 3 seconds between waves
  setTimeout(function () {
    // Reset the wave count
  }, 10000);
}
function getRandomWordLength() {
  return Math.floor(Math.random() * (maxWordLength - 2)) + 2;
}
function getRandomWord(length) {
  var category = wordCategories[length];
  return category[Math.floor(Math.random() * category.length)];
}
function getRandomSpeed() {
  return Math.random() * (maxSpeed - 1) + 1;
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  words.forEach(function (word, index) {
    word.update();
  });
}
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    var inputElement = document.querySelector('input');
    var inputWord = inputElement.value.toLowerCase();
    var closestWord = null;
    var closestDistance = Infinity;
    words.forEach(function (word) {
      if (word.visible) {
        var distance = Math.abs(word.y - canvas.height);
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
  var scoreboardElement = document.getElementById('score');
  scoreboardElement.textContent = "".concat(score);
  var maxInfoElement = document.getElementById('maxSpeedLength');
  maxInfoElement.textContent = "Max Length: ".concat(maxWordLength, ", Max Speed: ").concat(maxSpeed);
}
init();
animate();
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
document.addEventListener('keydown', handleEnterKey);

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map