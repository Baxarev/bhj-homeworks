const game = document.getElementById('game');
const word = document.querySelector('.word');
const winRate = document.querySelector('.status__wins');
const loseRate = document.querySelector('.status__loss');
const timer = document.querySelector('.timer');

let symbols = null;
let symbolsCounter = 0;

function generateWord() {
  const words = [
    'хороший day',
    'я люблю kitkat',
    'rock гитара',
    'вы beautiful',
    'смотрю youtube',
    'я love life',
    'родной javascript',
    'help мне',
  ];
  const index = Math.floor(Math.random() * words.length);

return words[index].split("");
}

function getWord() {
  word.innerHTML = generateWord().map(item => `<span class="symbol">${item}</span>`).join("");
  symbols = document.querySelectorAll('.symbol');
  timer.textContent = symbols.length;
  symbolsCounter = 0;
  if (winRate.textContent === '10') win();
  if (loseRate.textContent === '5') lose();
}

function win() {
  loseRate.textContent = 0;
  winRate.textContent = 0;
  alert('Победа');
  getWord();
  
}

function lose() {
  loseRate.textContent = 0;
  winRate.textContent = 0;
  alert('Поражение');
  getWord();
 
}

function translate(symb) {
  let arr = [
    ["А",70],
    ["Б",188],
    ["В",68],
    ["Г",85],
    ["Д",76],
    ["Е",84],
    ["Ё",192],
    ["Ж",186],
    ["З",80],
    ["И",66],
    ["Й",81],
    ["К",82],
    ["Л",75],
    ["М",86],
    ["Н",89],
    ["О",74],
    ["П",71],
    ["Р",72],
    ["С",67],
    ["Т",78],
    ["У",69],
    ["Ф",65],
    ["Х",219],
    ["Ц",87],
    ["Ч",88],
    ["Ш",73],
    ["Щ",79],
    ["Ъ",221],
    ["Ы",83],
    ["Ь",77],
    ["Э",222],
    ["Ю",190],
    ["Я",90],
    ["[",219],
    ["]",221],
    [";",168],
    ["'",222],
    [",",188],
    [".",190],
 ]
  if (arr.filter(i => i.includes(symb)).length === 0) return symb.charCodeAt();
  return arr.filter(i=>i[0]===symb)[0][1];
}

document.addEventListener('keyup', (e) => {
  if (symbolsCounter === symbols.length-1) {
    winRate.textContent++;
    getWord();
    return;
  }
  
  if (translate(e.key.toUpperCase()) === translate(symbols[symbolsCounter].textContent.toUpperCase())) {
    symbols[symbolsCounter].classList.add('symbol_correct');
    symbolsCounter++;
  } else {
    loseRate.textContent++;
    getWord();
  }
})

getWord();

setInterval(() => {
  timer.textContent--
  if (timer.textContent === '0') {
    lose();
    getWord();
  }
}, 1000)