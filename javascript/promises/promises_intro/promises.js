// THE CALLBACK VERSION
// function that pretends to get data from website so takes a few seconds (random) and is sometimes unsuccessful
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// THE PROMISE VERSION - only has url passed in, not success/failure
// creates a promise object
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// tries to get data from books.com, if sucessful, get from page2, if successful, page 3 etc. very nested
// we have to define the failure and success functions to pass into the above function. as we can see from above, the fakeRequestCallback function, passes in a parameter  (e.g.'connection timeout') to the functions that we will create. 
/*
fakeRequestCallback('books.com/page1',
    function (response) {
        console.log("IT WORKED!!!!")
        console.log(response)
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log("IT WORKED AGAIN!!!!")
                console.log(response)
                fakeRequestCallback('books.com/page3',
                    function (response) {
                        console.log("IT WORKED AGAIN (3rd req)!!!!")
                        console.log(response)
                    },
                    function (err) {
                        console.log("ERROR (3rd req)!!!", err)
                    })
            },
            function (err) {
                console.log("ERROR (2nd req)!!!", err)
            })
    }, function (err) {
        console.log("ERROR!!!", err)
    })
*/

// ======== PROMISES =========
// promise is just an object - a promise of an eventual value that may or may not work out
// you pass callbacks to the promise object itself rather than passing callbacks into the initial funciton
// basic unnested version
/*
const request = fakeRequestPromise('yelp.com/page1')
request.then(() => {
    console.log("promise resolved", ' it worked')
})
request.catch(() => {
    console.log('Promise rejected', " oh no error")
})
*/

//another syntax:
/*
const request = fakeRequestPromise('yelp.com/page1')
request
    .then(() => {
    console.log("promise resolved", ' it worked')
})
    .catch(() => {
    console.log('Promise rejected', " oh no error")
})
*/

// another syntax (called chaining): dont have to save to a variable. you can do the same like below. but now we nesting again.
/*
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("IT WORKED!!!!!! (page2)")
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log("IT WORKED!!!!!! (page3)")
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)")
                    })
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)")
            })
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)")
    })
*/

// THE CLEANEST OPTION WITH THEN/CATCH
// instead of nesting the .then's, we can instead return the promise, so we can chain a .then(() => {}) on below. 
// can then use a single .catch for all of them
// the 'data' comes from the fake request promise function 'connection timeout' or 'here is your fake data'

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })



// ======== CREATING OUR OWN PROMISES ========  
// create a enw promise and then pass in a function with two parameters - by convention: resolve and reject
// resolve is a function that will resolve the promise, the, second one will reject it

/*
new Promise ((resolve, reject) => {
    resolve(); //this resolves the promise 
})

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE')
            }
            reject('REQUEST ERROR!')
        }, 1000);
    })
}

fakeRequest('dogs.com')
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
*/

// 
new Promise ((resolve, reject) => {
    resolve(); //this resolves the promise 
})

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.9) {
                resolve(`Here is your fake data from ${url}`)
            }
            reject('REQUEST ERROR!')
        }, 1000);
    })
}


//what if there's an error? can use try/catch
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1')
        console.log(data1)
        let data2 = await fakeRequest('/page2')
        console.log(data2)
    } catch (e) {
        console.log('CAUGHT AN ERROR')
        console.log('error is:', e) //e is the exact error that made it go to catch in the first place
    }
}
