const btn = document.querySelector('#colour-btn');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')

function random_rgb () {
  return (Math.floor(Math.random() * 255 + 1));
}

btn.addEventListener('click', function() {
  let a= random_rgb(), b = random_rgb(), c = random_rgb();
  body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
  h1.innerText = `rgb(${a}, ${b}, ${c})`
})