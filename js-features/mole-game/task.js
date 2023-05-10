const getHole = (index) => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function resetStat() {
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).classList.contains( 'hole_has-mole' )) {
      dead.textContent++;
      if (dead.textContent === '10') {
        alert('Победа');
        resetStat()
      }
    } else {
      lost.textContent++;
      if (lost.textContent === '5') {
        alert('Поражение');
        resetStat()
      }
    }
  }
}





