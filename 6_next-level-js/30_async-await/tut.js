const photos = [];

// async makes function run 'asynchronously'
async function photoUpload() {
  let uploadStatus = new Promise((resolve, reject) => {
    setTimeout (() => {
      photos.push('Profile pic');
      resolve('Photo Uploaded');
    }, 3000)
  })

  console.log('before await,,,');
  // await halts execution @ this line until resolved
  let result = await uploadStatus; 
console.log('after await...'); // => logs AFTER 3 seconds

  console.log('result:', result);
  console.log('length:', photos.length);
  return result;
}

photoUpload();
console.log(photoUpload);