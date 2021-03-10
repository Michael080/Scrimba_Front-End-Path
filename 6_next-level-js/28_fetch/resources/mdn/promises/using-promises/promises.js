function doSomething() {
  console.log('doing something...');
}

function successCallback() {
  console.log('successCallback(): Success!');
}

function failureCallback() {
  console.log('failureCallback(): Failure :{');
}

const promise = doSomething();

const promise2 = promise.then(successCallback, failureCallback);

new Promise((resolve, reject) => {
  console.log('Initial');

  resolve();
})
  .then(() => {
    throw new Error('Something failed');

    console.log('Do this');
  })
  .catch(() => console.log('Do that'));
  .then(() => console.log('Do this, no matter what happened before'));