const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets'); 
// prevent default stops the page being reloaded, or going to new page after form submitted (is a method of the event object)
// below is one way to access the results of the input but not that god
/*
tweetForm.addEventListener('submit', function(e){
  const usernameInput = document.querySelectorAll('input')[0];
  const tweetInput = document.querySelectorAll('input')[1];
  console.log(usernameInput.value, tweetInput.value)
  e.preventDefault();
})
*/

// this way is better - uses the name of the inputs and returns the value
// .elements - gives us an order of inputs which we could iterate over (0:,1:,2:), or can access by name
/*
tweetForm.addEventListener('submit', function(e){
  console.log(tweetForm.elements.username.value); //'username' is the name I gave the input on the html
  console.log(tweetForm.elements.tweet.value);
  e.preventDefault();
})
*/
// post comment to page
tweetForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '' //this way resets the input boxes to empty
  tweetInput.value = ''
})

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweets.append(newTweet);
}

// ======== CHANGE and INPUT EVENTS ========
// with a change - the 'change' only happens when you click away from the input box and there is different writing in the box from when you entered - not after each letter
/*
const inpt = document.querySelector('#inp');
inpt.addEventListener('change', function(){
  console.log('gna make a change')
})
*/

// with an input event - it fires every time you type a new character in the input box. Is dif from keydown cos it doesnt count things like moving the cursor or pressing shift buttons, and still works if you copy paste (unlike keydown)

const inpt = document.querySelector('#inp');
const h1 = document.querySelector('h1');
inpt.addEventListener('input', function() {
  h1.innerText = inpt.value;
});

// EVENT BUBBLING - function(e){e.stopPropogation()} stops event bubbling i.e. if button inside div and button and div both do something when clicked, you can stop propogation so only button stuff happens

// ======== EVENT DELEGATION =========
// lines 64-69 would delete stuff thats already in the list when the website loads up, but will not delete things that are added to the list afterwards. this is because they are not selected by querySelectorAll() as they dont exist yet
/*
const lis = document.querySelectorAll('li');
for (let li of lis) {
  li.addEventListener('click', function() {
    li.remove();
  })
}
*/

// to get around this, we can do the following. e.target, is whatever was clicked inside the ul. below code deletes something that is clicked in the ul "tweets" but only if it is also an li
tweets.addEventListener('click', function(e){
  e.target.nodeName === 'LI' && e.target.remove(); //short way of 'if' statement - if left side is false, right side wont run 
})