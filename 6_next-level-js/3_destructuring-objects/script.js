const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

// access object vals via dot-notation:
console.log(player.name);

// OR via destructuring:
const {name, club} = player;
console.log(name); // => Lebron James
console.log(club); // => LA Lakers
console.log(`${name} plays for ${club}`);

// 'get' nested-object city:
const {address: {city}} = player;
console.log(city); // => Los Angeles