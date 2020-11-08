//======== XML HTTP REQUEST ========
//old and bad way of doing (doesnt support promises) but still useful to know for context

/*
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("ALL DONE WITH REQUEST!!!")
  console.log(this);//"this" refers to the object for the request itself
  const data = JSON.parse(this.responseText);//response text is in the object
  console.log(data.ticker.price)
}

req.onerror = function() {
  console.log("ERROR!!!")
  console.log(this)
}

req.open("GET", 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send()
*/

// BAD BECAUSE LOTS OF NESTING OF CALLBACKS BECAUSE OF NO SUPPORT FOR PROMISES

// ======== FETCH API ========
// newer way of making requests using js which supports promises
//but fetch resolves the promise (and triggers .then) when it gets the headers, not when all the data has arrived

// PROMISE VERSION
/*
fetch('https://api.cryptonator.com/api/ticker/btc-usd') //returns a promise
  .then(res => { // res is the response
    console.log("RESPONSE, WAITING TO PARSE...", res)
    // cant do json.parse cus we dont actually have all the data yet
    return res.json() // returs a promise so we can .then() chain below. 
  })
  .then(data => {
    console.log('DATA PARSED...', data.ticker.price) // this line will only run when the line 33 promise is resolved which will only happen when all the data has been arrived and parsed
  })
  .catch (e => {
    console.log('OH NO, ERROR', e)
  })
  */

//  ASYNC FUNCTION VERSION
const fetchBitcoinPrice = async () => {
  try {
    let res  = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')//returns a promise
    const data = await res.json()
    console.log(data.ticker.price)
  } catch (e){
    console.log("SOMETHING WENT WRONG!!!", e)
  }  
}

fetchBitcoinPrice();