function add(nums) {
  // doesn't print all of the arguments  
  console.log(nums); // => 4
  // arguments property works
  console.log(arguments);
}

add(4, 8, 10, 100);

// using rest
function sum(...nums) {
  // works with rest operator!!!
  console.log(nums); // => 4, 8, 10, 100
}

sum(4, 8, 10, 100);