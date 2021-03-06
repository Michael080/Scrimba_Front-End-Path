// Challenge: print city, state, & country by destructuring the object

function addressMaker(address) {
  let {city, state} = address;
  const newAddress = {
    city,
    state,
    country: 'USA'
  }
  
  let {country} = newAddress;
  console.log(`${city}, ${state}, ${country}`);
}

addressMaker({city: 'Austin', state: 'Texas'});