// ======== ON CLICK PROPERTY ========

const btn = document.querySelector('#v2');
btn.onclick = function () {
  console.log('you clicked me!!');
  console.log('Gee I sure hope it worked!!');
}

function scream () {
  console.log('stop touching me');
}
// no parentheses because, ,we're not calling a function - we  just telling it what function to run
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
  alert('you clicked the h1');
}

// ======== ADD EVENT LISTENER =======
// Best method because it allows you to add more than one function. onclick would override the last one if you add a new one but addEventListener doesn't
const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function() {
  alert('Clicked!!');
})

// using THIS here refers to whatever was clicked on/passed into it - whatever the event was triggereed on
const btns = document.querySelectorAll('button');
function makeRed() {
  this.style.backgroundColor = 'red';
} 
for (let butt of btns) {
  butt.addEventListener('click', makeRed);
}

// What key was pressed?
const inp = document.querySelector('#yuuup');
inp.addEventListener('keydown', function(evt) {
  console.log(evt)
  console.log(evt.key);
  console.log(evt.code);
})

window.addEventListener('keydown', function(e) {
  switch(e.code) {
    case 'ArrowUp':
      console.log('Arrow up!');
      break;
    case 'ArrowDown':
      console.log('Arrow down!');
      break;
    case 'ArrowLeft':
      console.log('Arrow left!');
      break;
    case 'ArrowRight':
      console.log('Arrow Right!');
      break;  
    default:
      console.log('ignored');
  }
})


