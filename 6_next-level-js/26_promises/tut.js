// Promises
// The Promise object represents the eventual completion (or failure) of 
// an asynchronous operation and its resulting value
const buyFlightTicket = () => {
  // promise is stored in buyFlightTicket()
  /* 
  3 possible promise states:
    * pending 
    * fulfilled
    * rejected
  */
// if everything goes well run resolve || else reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject('Sorry your payment was not successful');
      } else {
        resolve('Thank you, your payment was successful');
      }

    }, 3000)
  });
}

// When the process is fulfilled we want to know the outcome
// then --- return w/o error/s
// The then() method returns a Promise. 
// It takes up to two arguments:    
//  callback functions for the success and failure cases of the Promise.

// catch --- return w/ error/s

// success & error in this case, could be called anything
// success takes whatever is in resolve()
// error takes whatever is in reject()
buyFlightTicket()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));


  /**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/