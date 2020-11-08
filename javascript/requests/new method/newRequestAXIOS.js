// ======== AXIOS ========

// axios is a library that u can use for lots of things. can get the script tag off github

// PROMISE VERSION
// below returns a fully parsed promise
/*
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
 .then(res => {
   console.log(res.data.ticker.price)
 })
 .catch(err => {{
   console.log("ERROR!!", err)
 }})
*/

//  ASYNC FUNCTION VERSION
/*
const fetchBitcoinPrice = async () => {
 try {
   const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
   console.log(res.data.ticker.price)
 } catch (err) {
   console.log("ERROR!!", err)
 }
}

fetchBitcoinPrice();
*/

// ======== USING AXIOS TO SET HEADERS ========
const jokes = document.querySelector('#jokes')
// the second argument you pass into axios.get is configoration information. for example, you can specify the headers.

const addNewJoke = async () => {
  const jokeText = await getDadJoke()
  const newLi = document.createElement('li');
  newLi.append(jokeText);
  jokes.append(newLi)
}

const getDadJoke = async () => {
  try {
    const config = { headers: {Accept: 'application/json'}} // from the docs, we need to set header accept to 'application/json' if we want json.
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
    
  } catch (e) {
    return "NO JOKES AVAILABLE, SORRY...  :("
  }
} 
const btn = document.querySelector('button')
btn.addEventListener('click', addNewJoke)