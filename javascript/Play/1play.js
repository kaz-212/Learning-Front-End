const allImages = document.getElementsByTagName('img');

/***** GETS THE SRC OF ALL IMAGES *****/  
// for (let img of allImages) {
//     console.log(img.src);
// }



/***** MAKES ALL THE IMAGES THE SAME IMAGE *****/  
// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

/***** querySelector() and querySelectorAll() *****/  
// you select in() by usind css selectors e.g. .class #id in ''

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

// ======== MANIPULATION - HTML =========

// .innerText gives you/allows you to edit the text
document.querySelector('h1').innerText = 'I am a heading'
// ^replaces the h1 text with 'I am a heading' (+= would have addeed on I am a heading instead of replace)

// .innerHTML does the same but allows you to change the html 
document.querySelector('h1').innerHTML += '<sup> I have been edited by inner.HTML </sup>'

// .setAttribute('href', 'http://www.google.com'), sets the href of some object to google.com
document.querySelector('a').setAttribute('href', 'http://www.google.com')

// can change things like 'type', e.g. 
const input = document.querySelector('input[type="checkbox"]')
input.type = 'password'
// same as below
input.setAttribute('type','password')


// ======== MANIPULATION - CSS =========
// not that good to do this - better to just create a class in css and then apply class using js (see below)
// .style accesses style (but you cant view - only update) then can .color or .textSize (note camelCase not text-size like in css)

const h1 = document.querySelector('h1')
h1.style.color = 'green'
h1.style.fontSize = '3em'
h1.style.border = '2px solid pink'

// if you do want to view the style, you use window.getComputedStyle()
console.log(window.getComputedStyle(h1).color)

// ======== MANIPULATION - apply class using js =========
// h2.classList lists the current classes on h2, but it has methods like .add or .remove or .contains or .toggle where you can add a class (on css stylesheet)
const h2 = document.querySelector('h2')
h2.classList.add('purple')

// ======== TRAVESRING PARENTS AND CHILDREN =========
// .parentElement returns the parent element
const firstBold = document.querySelector('b')
const para = firstBold.parentElement

// .childElementCount gives number of children
// .children gives iterable array like structure of children in order 
para.children

// .nextElementSibling gives next sibling
const squareImg = document.querySelector('.square')
squareImg.nextElementSibling

// ======== CREATION - APEND AND REMOVE =========
// new image - appendChild
const newImg = document.createElement('img')
newImg.src = 'https://i.ebayimg.com/images/g/HiIAAOSwpDdVbduf/s-l400.jpg'
document.body.appendChild(newImg)
newImg.classList.add('square')

// newh3 - appendChild
const newH3 = document.createElement('h3')
newH3.innerText = 'I am a new h3'
document.body.appendChild(newH3)

// .append allows us to insert more than one thing at a time. Can also pass in text as a string into para (const para abov)
para.append('I AM NEW TEXT YAAAAY!!!!', 'I AM THE SECOND THING TO APPEND!!!')

// can also.prepend
const newB = document.createElement('b')
newB.append('BOLD MAMMA!!! ')  // could have also done newB.innerText = 'BOLD MAMMA!!!'
para.prepend(newB)

// can also insert between two siblings - doesnt just have to be on the end or start
const newH2 = document.createElement('h2')
newH2.innerText = 'SOME TASTY CHICKENS!!!!'
h1.insertAdjacentElement("afterend", newH2) // h1 const from before 

// .after
newH3.innerText = 'SLOT ME IN SON!!'
h1.after(newH3)

// .removeChild() IS JANKY
const firstLi = document.querySelector('li')
firstLi.parentElement.removeChild(firstLi)

// remove() is better - can call direct
const secLi = document.querySelector('li:nth-of-type(2)')
secLi.remove()
