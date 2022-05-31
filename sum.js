const sumNum = () => {
  const args = process.argv;
  let firstNum = Number(args[2]);
  let secondNum = Number(args[3]);
  let sum = firstNum + secondNum;
  return sum;
};

console.log(sumNum());
