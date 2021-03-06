if (false) {
  let example = 5;
}

console.log(example); // => example is not defined as let is block-scoped


// my ghetto way to get the 'new' example out of the braces
let example;

{
  (function(){
    example = 5;
    return example
  }())
  // return example = 5;
}

console.log(example); // => 5
