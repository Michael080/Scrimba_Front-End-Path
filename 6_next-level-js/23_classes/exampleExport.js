// // First export for tut:
// export const data = [1, 2, 3];

// // Second export for challenge:
// export function add(num1, num2) {
//   return num1 + num2;
// }

// export function blammo() {
//   return 'blammo';
// }

// export const blammo = 'blammo';

// export class blammo {
//   constructor(word, action) {
//     this.word = word;
//     this.action = action;
//   }
// }

export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Meow') {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  // a static operates w/out an instantiation of a class
  static return10() {
    return 10;
  }
}

export class Cat extends Animal {
  constructor(type, legs, tail) {
    // constructor(type, legs, tail, makeNoise) Note: method makeNoise can be extended too

    // super required for spec'ing which properties to
    // extend, it is used to access and call functions on
    // an objects parent super-keyword may be for 'superset'???
    // MDN: When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.
    // super(type, legs, makeNoise); Note: method makeNoise can be extended too
    super(type, legs);
    this.tail = tail;
  }
  makeNoise(sound = 'Meow') {
    console.log(sound);
  }
}

// Alternative Cat as extension of Animal
export class Cat2 extends Animal {
  makeNoise(sound = 'meow') {
    console.log(sound);
  }
}