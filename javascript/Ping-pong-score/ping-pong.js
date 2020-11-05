const btn1 = document.querySelector('#p1');
const btn2 = document.querySelector('#p2');
const btnReset = document.querySelector('#reset');
let score1 = 0;
let score2 = 0;
const h2 = document.querySelector('h2');
const form = document.querySelector('form')
let maxScore = form.elements.playTo.value;


btn1.addEventListener('click', function(e){
  e.preventDefault();
  maxScore = form.elements.playTo.value;
  score1 += 1;
  h2.innerText = `${score1} - ${score2}`;
  isEndGame(score1, score2, maxScore);
})

btn2.addEventListener('click', function(e){
  e.preventDefault();
  maxScore = form.elements.playTo.value;
  score2 += 1;
  h2.innerText = `${score1} - ${score2}`;
  isEndGame(score1, score2, maxScore);
})

const isEndGame = (score1, score2, maxScore) => {
  if (score2 == maxScore || score1 == maxScore) {
    console.log('reached')
    btn1.disabled = true;
    btn2.disabled = true;
  }
}

btnReset.addEventListener('click', function(e) {
  e.preventDefault();
  btn1.disabled = false;
  btn2.disabled = false;
  score2 = 0;
  score1 = 0;
  h2.innerText = `${score1} - ${score2}`;
})
