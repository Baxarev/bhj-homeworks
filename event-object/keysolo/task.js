class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerNumElement = container.querySelector('.timer');

    this.reset();

    this.registerEvents();

    this.timer();

    this.resetTimer();
  }

  resetTimer() {
    this.timerNumElement.textContent = this.wordElement.textContent.length;
  }

  timer() {
    setInterval(() => {
      this.timerNumElement.textContent--
      if(this.timerNumElement.textContent === '0') {
        this.fail();
      }
    }, 1000)
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keyup' , (e) => {
      if (this.translate(this.currentSymbol.textContent.toUpperCase()) === this.translate(e.key.toUpperCase())) {
        this.success();
        return;
      }
      this.fail();
    })
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.resetTimer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    this.resetTimer();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'хороший day',
      'я люблю kitkat',
      'rock гитара',
      'вы beautiful',
      'смотрю youtube',
      'я love life',
      'родной javascript',
      'help мне',
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  translate(symb) {
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
}

new Game(document.getElementById('game'))

