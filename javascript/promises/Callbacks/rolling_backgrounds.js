// can methodically change bg colour by incrementing by 1s each time - but this is kinda janky
/*
setTimeout(() => {
  document.body.style.backgroundColor = 'red';
},1000)

setTimeout(() => {
  document.body.style.backgroundColor = 'orange';
},2000)

setTimeout(() => {
  document.body.style.backgroundColor = 'yellow';
},3000)
*/

// could nest them in eachother
/*
setTimeout(() => {
  document.body.style.backgroundColor = 'red';
  setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
    setTimeout(() => {
      document.body.style.backgroundColor = 'yellow';
      setTimeout(() => {
        document.body.style.backgroundColor = 'green';
        setTimeout(() => {
          document.body.style.backgroundColor = 'blue';
          setTimeout(() => {
            document.body.style.backgroundColor = 'purple';
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
},1000)
*/

// could simplify this by writing a function

/*
const delayedColourChange  = (newColour, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColour;
    doNext && doNext(); //if there is a doNext passed in, then carry out doNext() function 
  }, delay)
}

delayedColourChange('red', 1000, () => {
  delayedColourChange('orange', 1000, () => {
    delayedColourChange('yellow', 1000, () => {
      delayedColourChange('green', 1000, () => {
        delayedColourChange('blue', 1000, () => {
    
        })
      })
    })
  })
})
*/

// ======== DONE WITH PROMISES ========
//
const delayedColourChange = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  })
}

/*
delayedColourChange('red', 1000)
  .then(() => delayedColourChange('orange', 1000)) // same line implicit return
  .then(() => delayedColourChange('yellow', 1000))
  .then(() => delayedColourChange('green', 1000))
  .then(() => delayedColourChange('blue', 1000))
  .then(() => delayedColourChange('indigo', 1000))
  .then(() => delayedColourChange('violet', 1000))
*/ 

// ======== ASYNC FUNCTIONS - A NEWER AND CLEANER SYNTAX FOR WORKING WITH ASYNC CODE ========

// async functions always automatically return a promise  
// below functions al return prommises

/*
async function hello() {
} 
const hello = async () => {
}
*/ 

// the returned value of the function is the value that the promise will be resolved with
// any error (e.g. syntax error or throw), then the promise is rejected

/*
const sing  = async () => {
  throw "oh no Error"
  return 'LA LA LA LA'
}
sing()
  .then((data) => {
    console.log('"SING" PROMISE RESOLVED WITH:', data)
  })
  .catch((err) => console.log(err))
*/

// fake login thing to show how async functions and promises work

/*
const login = async (username, password) => {
  if (!username || !password) throw "missing credentials"
  if (password === '123password') return 'welcome'
  throw "invalid password"
}


login('jddjd', '123password')
  .then((msg) => {
    console.log("logged in!")
    console.log(msg)
  })
  .catch((err) => {
    console.log("error!")
    console.log(err)
  })
*/

// ========= ROLLING BACKGROUNDS AND ASYNC FUNCTIONS =========
// await means wait for this to be done before running anything else
async function rainbow() {
  await delayedColourChange('red', 1000)
  await delayedColourChange('orange', 1000)
  await delayedColourChange('yellow', 1000)
  await delayedColourChange('green', 1000)
  await delayedColourChange('blue', 1000)
  await delayedColourChange('indigo', 1000)
  await delayedColourChange('violet', 1000)
  return "ALL DONE" // returns a resolved promise with 'all done' passed in 
}

// alternitavely
// rainbow().then((done) => console.log(done)) //OR:
async function printRainbow() {
  await rainbow()
  console.log('END OF RAINBOW')
}