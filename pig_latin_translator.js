//pulls out the command line arguments and initializes an empty array where
//we will keep the translated words
var originalWords = process.argv.slice(2);
var pigLatinWords = [];

//iterates over the original words and translates them.
//pushes the result into pigLatinWords
for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

//joining the contents, which we expect to be strings, and outputs
//the final result to the console
console.log(pigLatinWords.join(" "));

//takes a word and applies the pig latin translation algorithm to it
function translateToPigLatin(word) {
  return word.slice(1, word.length) + word[0] + "ay";
}
