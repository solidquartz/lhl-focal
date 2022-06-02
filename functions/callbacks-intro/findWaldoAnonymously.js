// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {

  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  });
};


// const actionWhenFound = function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// };

//refactored to anonymous function CALL
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});

//prints "Found Waldo at index 2!"