function addressMaker(city, state) {
    const newAddress = {newCity: city, newState: state};
    console.log(newAddress); // {newCity: city, newState: state}
    // OR
    const address = {city, state};
    // object literals 'automatically' assign the matching keys/values:
    console.log(address); // => {city: 'Austin', state: 'Texas'}
}

addressMaker('Austin', 'Texas');