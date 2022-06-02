//pair programming with michael (hien)

const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');

  //places the key-value pair from the first object in a temporary variable
  let placeholder = object1[key1];

  //moves the key-value pair from the second object into the first object
  object1[key1] = object2[key2];

  //moved the first key-value pair into the second object from storage
  object2[key2] = placeholder;


  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8, b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12 });
swapper('c', { a: 1, b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });


// prints:

// Swap!;
// object1: { a: 5, b: 2, c: 3; }
// object2: { a: 4, b: 3, c: 1; }
// Swap!;
// object1: { a: 8, b: 12, c: 6; }
// object2: { a: 5, b: 1, c: 2, d: 7; }
// Swap!;
// object1: { a: 1, b: 3, c: 5, d: 7; }
// object2: { a: 4, b: 0, c: 3; }