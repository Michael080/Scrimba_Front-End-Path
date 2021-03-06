let names = ['Dylan', 'Coding God', 'Israel'];

// destructured
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];
console.log(firstName); // => Dylan --- Idk how this works yet
console.log(
  `All hail ${firstName} the ${middleName} ${lastName}!!!`
); // => All hail Dylan the Coding God Israel!!!

// destructured indices can be modified/reassigned:
lastName = 'Blammo';
console.log(lastName); // => Blammo