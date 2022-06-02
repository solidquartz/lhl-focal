// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i);   // execute callback -> the index array is passed here into the callback
  //   }
  // }

  //refactored as forEach loop
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  });

};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//prints "Found Waldo at index 2!"