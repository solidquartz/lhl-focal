//takes a single parameter from the command line (a number)
//and rolls that many d6.

const rollSix = function () {
  //accepts code from command line
  const rollTimes = process.argv[2] ?? 1;
  console.log(rollTimes);

  //variable to hold the dice rolls
  let rolls = [];

  //generate a random number 1-6 a number of times based on the parameter taken in
  for (let i = 0; i < rollTimes; i++) {
    rolls.push(Math.floor(Math.random() * 6));
  }

  //send the generated results to the variable as a string

  //prints the phrase
  return console.log(`Rolled ${rollTimes} dice: `, rolls.join(","));
};

rollSix();
